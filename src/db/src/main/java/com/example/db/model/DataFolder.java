package com.example.db.model;

import jakarta.persistence.*;
import lombok.*;


import java.util.Date;


@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "datafolder")
public class DataFolder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;
    private Date date;
    private String owner;
    private String name;

}

