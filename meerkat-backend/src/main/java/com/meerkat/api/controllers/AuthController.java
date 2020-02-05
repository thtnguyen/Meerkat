package com.meerkat.api.controllers;

import com.meerkat.api.config.JwtUtil;
import com.meerkat.api.dtos.AuthResponseDto;
import com.meerkat.api.dtos.ErrorResponseDto;
import com.meerkat.api.dtos.UserDto;
import com.meerkat.api.models.User;
import com.meerkat.api.repositories.UserRepository;
import com.meerkat.api.services._UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private _UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/auth/register")
    public ResponseEntity register(@RequestBody UserDto newUserDto) throws Exception {
        userRepository.save(userDetailsService.registerNewUser(newUserDto));
        try {
            return login(newUserDto);
        } catch(Exception e) {
            throw e;
        }
    }

    @PostMapping("/auth/login")
    public ResponseEntity login (@RequestBody UserDto userDto) throws Exception {
        User user = null;
        try {
            user = userRepository.findByUsername(userDto.getUsername());
            authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getHashedPassword()));
        } catch(BadCredentialsException e) {
            throw new Exception("Invalid username or password.", e);
        } catch(Exception e) {
            throw e;
        }

        if(user != null) {
            final String jwt = jwtUtil.generateToken(userDetailsService.convertFromModel(user));
            return ResponseEntity.ok(new AuthResponseDto(jwt));
        }

        return (ResponseEntity) ResponseEntity.badRequest();
    }
}