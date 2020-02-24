package com.meerkat.api.dtos;

import java.util.List;

public class UserDto {
    private String username, email, password,firstname,lastname,genre;



    public String getUsername() { return this.username; }
    public String getEmail() { return this.email; }
    public String getPassword() { return this.password; }
    public String getFirstname() {return this.firstname; }
    public String getLastname() {return this.lastname; }
    public String getGenre() {return this.genre; }



    public void setUsername(String username){
        this.username = username;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public void setFirstname(String firstname){ this.firstname = firstname; }
    public void setLastname(String lastname){ this.lastname = lastname; }
    public void setGenre(String genre){ this.genre = genre; }

}
