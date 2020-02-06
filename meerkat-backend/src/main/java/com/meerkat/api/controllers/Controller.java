package com.meerkat.api.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {
    @RequestMapping("/")
    public String testResponse(){
        return "Meerkat API";
    }
}