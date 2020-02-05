package com.meerkat.api.models;

import com.meerkat.api.dtos.UserDto;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.keygen.KeyGenerators;
import org.springframework.security.crypto.keygen.StringKeyGenerator;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.UUID;

@Document
public class User {
    @Id
    private UUID id;
    private String username, email;
    private String salt, hashedPassword;

//    public User(UserDto userDto){
//        this.id = UUID.randomUUID();
//
//        this.username = userDto.getUsername();
//        this.email = userDto.getEmail();
//
//        StringKeyGenerator keyGen = KeyGenerators.string();
//        this.salt = keyGen.generateKey();
//
//        String saltedPassword = userDto.getPassword() + this.salt;
//        this.hashedPassword = new BCryptPasswordEncoder().encode(saltedPassword);
//    }

    public User(UUID id, String username, String email, String salt, String hashedPassword) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.salt = salt;
        this.hashedPassword = hashedPassword;
    }

    public UUID getId() { return this.id; }
    public String getUsername() { return this.username; }
    public String getEmail() { return this.email; }
    public String getSalt() { return this.salt; }
    public String getHashedPassword() { return this.hashedPassword; }

    public void setId(UUID id) { this.id = id; }
    public void setUsername(String username) { this.username = username; }
    public void setEmail(String email) { this.email = email; }
    public void setSalt(String salt) { this.salt = salt; }
    public void setHashedPassword(String hashedPassword) { this.hashedPassword = hashedPassword; }

}
