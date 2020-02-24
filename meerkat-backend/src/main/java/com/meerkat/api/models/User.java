package com.meerkat.api.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document
public class User {
    @Id
    private UUID id;
    private String username,firstname,lastname,email, password;
    private String genre;

    public User(UUID id, String username, String firstname,String lastname,String email, String password,String genre) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.genre = genre;
    }

    /*public Geners(UUID id, List<String> geners){
        this.id = id;
        this.geners=geners;
    }*/

    public UUID getId() { return this.id; }
    public String getUsername() { return this.username; }
    public String getEmail() { return this.email; }
    public String getPassword() { return this.password; }
    public String getFirstname(){return this.firstname; }
    public String getLastname(){return this.lastname; }
    public String getGenre() { return this.genre; }

    public void setId(UUID id) { this.id = id; }
    public void setUsername(String username) { this.username = username; }
    public void setEmail(String email) { this.email = email; }
    public void setPassword(String password) { this.password = password; }
    public void setFirstname(String firstname){this.firstname = firstname;}
    public void setLastname(String lastname){this.lastname = lastname; }
    public void setGeners(String genre){this.genre=genre; }


}
