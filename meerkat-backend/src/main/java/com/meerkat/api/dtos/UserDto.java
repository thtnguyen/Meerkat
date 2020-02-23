package com.meerkat.api.dtos;

import java.util.List;

public class UserDto {
    private String username, email, password,fname,lname;
    private String geners;


    public String getUsername() { return this.username; }
    public String getEmail() { return this.email; }
    public String getPassword() { return this.password; }
    public String getFname() {return this.fname; }
    public String getLname() {return this.lname; }
    public String getGeners() {return this.geners; }



    public void setUsername(String username){
        this.username = username;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public void setFname(String fname){ this.fname = fname; }
    public void setLname(String lname){ this.lname = lname; }
    public void setGeners(String geners){ this.geners = geners; }

}
