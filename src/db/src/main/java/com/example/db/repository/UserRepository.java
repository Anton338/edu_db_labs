package com.example.db.repository;

import com.example.db.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    void deleteById(Long id);
    User findUserById(Long id);
}
