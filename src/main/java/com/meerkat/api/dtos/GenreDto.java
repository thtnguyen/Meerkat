package com.meerkat.api.dtos;

import java.util.UUID;

public class GenreDto {
    private UUID genreId;
    private String genreName;

    public GenreDto(UUID genreId, String genreName) {
        this.genreId = genreId;
        this.genreName = genreName;
    }

    public UUID getGenreId() { return this.genreId; }
    public String getGenreName() { return this.genreName; }

    public void setGenreId(UUID genreId) { this.genreId = genreId; }
    public void setGenreName(String genreName) { this.genreName = genreName; }

}
