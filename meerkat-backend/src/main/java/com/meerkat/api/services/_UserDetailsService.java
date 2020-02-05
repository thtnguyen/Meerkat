package com.meerkat.api.services;

import com.meerkat.api.dtos.UserDto;
import com.meerkat.api.models.User;
import com.meerkat.api.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.keygen.KeyGenerators;
import org.springframework.security.crypto.keygen.StringKeyGenerator;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.UUID;

@Service
public class _UserDetailsService implements UserDetailsService {
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User userToLoad = userRepository.findByUsername(username);
        if(userToLoad == null) {
            throw new UsernameNotFoundException("User was not found.");
        }
        return convertFromModel(userToLoad);
    }

    public UserDetails convertFromModel(User user) {
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getHashedPassword(), new ArrayList<>());
    }

    public User registerNewUser(UserDto userDto) {
        UUID id = UUID.randomUUID();

        String username = userDto.getUsername();
        String email = userDto.getEmail();

        StringKeyGenerator keyGen = KeyGenerators.string();
        String salt = keyGen.generateKey();

        String saltedPassword = userDto.getPassword() + salt;
        String hashedPassword = new BCryptPasswordEncoder().encode(saltedPassword);

        return new User(id, username, email, salt, hashedPassword);
    }
}
