package com.example.db.service.impl;


import com.example.db.model.DataFolder;
import com.example.db.repository.DataFolderRepository;
import com.example.db.service.DataFolderService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Primary
public class DataFolderServiceImpl implements DataFolderService {

    private final DataFolderRepository repository;

    @Override
    public List<DataFolder> findAllDataFolder() {
        return repository.findAll();
    }

    @Override
    public DataFolder saveDataFolder(DataFolder dataFolder) {
        return repository.save(dataFolder);
    }

    @Override
    public DataFolder findById(Long id) {
        return repository.findDataFolderById(id);
    }

    @Override
    public DataFolder updateDataFolder(DataFolder dataFolder) {
        return repository.save(dataFolder);
    }

    @Override
    public void deleteDataFolder(Long id) {
         repository.deleteById(id);
    }
}
