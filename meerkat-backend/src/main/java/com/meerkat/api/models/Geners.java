package com.meerkat.api.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Document
public class Geners {
        @Id
        private UUID id;
        private List<String> genres;

        public Geners(UUID id, List<String> genres) {
            this.id = id;
            this.genres = genres;
        }

        public UUID getId() { return this.id; }
        public List<String> getUsername() { return this.genres; }


        public void setId(UUID id) { this.id = id; }
        public void setUsername(String genres) { this.genres = Collections.singletonList(genres); }

    }


