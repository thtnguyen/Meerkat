package com.meerkat.api.models;

import com.meerkat.api.dtos.GenreDto;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Document
public class Genre {
    @Id
    private UUID genreId;
    private String genreName;

    public Genre(UUID genreId, String genreName) {
        this.genreId = genreId;
        this.genreName = genreName;
    }

    public Genre(GenreDto dto) {
        this.genreId = dto.getGenreId();
        this.genreName = dto.getGenreName();
    }

    public UUID getGenreId() { return this.genreId; }
    public String getGenreName() { return this.genreName; }

    public void setGenreId(UUID genreId) { this.genreId = genreId; }
    public void setGenreName(String genreName) { this.genreName = genreName; }

    public static List<Genre> convertDtosToGenres(List<GenreDto> dtos) {
        List<Genre> genres = new ArrayList<>();
        for(GenreDto dto : dtos) {
            genres.add(new Genre(dto));
        }
        return genres;
    }
}