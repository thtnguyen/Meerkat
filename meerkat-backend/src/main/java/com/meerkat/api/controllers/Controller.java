package com.meerkat.api.controllers;

import com.meerkat.api.dtos.UserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @RequestMapping("/auth")
    public String testResponse(){
        return "Meerkat API";
    }

    @PostMapping("/auth")
    public ResponseEntity postResponse(@RequestBody UserDto user) {
        return ResponseEntity.ok(user.getUsername());
    }
}