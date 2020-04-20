package com.meerkat.api.models;

import com.meerkat.api.dtos.UserDto;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document
public class User {
    @Id
    private UUID id;
    private String username ,firstName, lastName, email, password;
    private List<Genre> favoriteGenres;

//    public User(UUID id, String username, String firstName,String lastName,String email, String password, List<GenreDto> favoriteGenres) {
//        this.id = id;
//        this.username = username;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.email = email;
//        this.password = password;
//        this.genre = genre;
//    }

    public User(UUID id, UserDto userDto) {
        this.id = id;
        this.username = userDto.getUsername();
        this.firstName = userDto.getFirstName();
        this.lastName = userDto.getLastName();
        this.email = userDto.getEmail();
        this.password = userDto.getPassword();
        this.favoriteGenres = Genre.convertDtosToGenres(userDto.getFavoriteGenres());
    }

    public UUID getId() { return this.id; }
    public String getUsername() { return this.username; }
    public String getEmail() { return this.email; }
    public String getPassword() { return this.password; }
    public String getFirstname(){return this.firstName; }
    public String getLastname(){return this.lastName; }
    public List<Genre> getGenre() { return this.favoriteGenres; }

    public void setId(UUID id) { this.id = id; }
    public void setUsername(String username) { this.username = username; }
    public void setEmail(String email) { this.email = email; }
    public void setPassword(String password) { this.password = password; }
    public void setFirstname(String firstname){this.firstName = firstname;}
    public void setLastname(String lastname){this.lastName = lastname; }
}
