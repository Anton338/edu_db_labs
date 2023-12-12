package com.example.db.model;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
//@Builder
@Entity
@Table(name = "user")
@NoArgsConstructor
public class User {

  //  @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;
    private String email;
    private Long Request_id;
}