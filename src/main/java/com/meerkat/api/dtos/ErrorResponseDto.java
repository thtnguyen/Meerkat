package com.meerkat.api.dtos;

public class ErrorResponseDto {
    private String message;

    public ErrorResponseDto(String message) { this.message = message; }

    public String getMessage() { return this.message; }
}
