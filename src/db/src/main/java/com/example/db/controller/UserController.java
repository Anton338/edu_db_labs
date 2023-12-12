package com.example.db.controller;


import com.example.db.model.User;
import com.example.db.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@AllArgsConstructor
public class UserController {

    public final UserService service;

    @GetMapping
    public List<User> findAllUser(){
        return service.findAllUser();
    }

    @PostMapping("save_user")
    public String saveUser(@RequestBody User user){
        service.saveUser(user);
        return "User successfully saved";
    }

    @GetMapping("/{id}")
    public User findByUser(@PathVariable Long id){
        return service.findById(id);
    }

    @PutMapping("update_user")
    public User updateUser(@RequestBody User user){
        return service.updateUser(user);
    }

    @DeleteMapping("delete_user/{id}")
    public void deleteUser(@PathVariable Long id){
        service.deleteUser(id);

    }
}
