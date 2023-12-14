package com.example.db.service.impl;

import com.example.db.model.DataFolder;
import com.example.db.model.User;
import com.example.db.repository.DataFolderRepository;
import com.example.db.repository.UserRepository;
import com.example.db.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class UserServiceImpl implements UserService {

    private final UserRepository repository;
    private final DataFolderRepository  dataFolderRepository;

    @Override
    public List<User> findAllUser() {
        return repository.findAll();
    }

    @Override
    public User saveUser(User user) {
        DataFolder dataFolder = user.getDataFolder();
        if (dataFolder != null) {
            if (dataFolder.getId() == null) {
                dataFolderRepository.save(dataFolder);
            }
        }

        return repository.save(user);
    }

    @Override
    public User findById(Long id) {
        return repository.findUserById(id);
    }

    @Override
    public User updateUser(User user) {
        return repository.save(user);
    }

    @Override
    public void deleteUser(Long id) {

        repository.deleteById(id);
    }
}
