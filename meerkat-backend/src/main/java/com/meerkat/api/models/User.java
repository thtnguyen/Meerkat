package com.meerkat.api.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document
public class User {
    @Id
    private UUID id;
    private String username,fname,lname,email, password;
    private String geners;

    public User(UUID id, String username, String fname,String lname,String email, String password,String geners) {
        this.id = id;
        this.username = username;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.geners = geners;
    }

    /*public Geners(UUID id, List<String> geners){
        this.id = id;
        this.geners=geners;
    }*/

    public UUID getId() { return this.id; }
    public String getUsername() { return this.username; }
    public String getEmail() { return this.email; }
    public String getPassword() { return this.password; }
    public String getFname(){return this.fname; }
    public String getLname(){return this.lname; }
    public String getGeners() { return this.geners; }

    public void setId(UUID id) { this.id = id; }
    public void setUsername(String username) { this.username = username; }
    public void setEmail(String email) { this.email = email; }
    public void setPassword(String password) { this.password = password; }
    public void setFname(String fname){this.fname = fname;}
    public void setLname(String lname){this.lname = lname; }
    public void setGeners(String geners){this.geners=geners; }


}
