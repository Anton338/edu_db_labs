package com.example.db.model;


import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@Entity
@Table(name = "user")
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;
    private String email;
    @Column(name = "request_id")
    private Long Request_id;

    @ManyToOne
   @JoinColumn(name = "datafolder_id")
   private DataFolder dataFolder;
}