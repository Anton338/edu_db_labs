package com.example.db.service;

import com.example.db.model.User;

import java.util.List;

public interface UserService {
     List<User> findAllUser();

     User saveUser(User user);

     User findById(Long id);

     User updateUser(User user);

     void deleteUser(Long id);
}

