package com.example.db.service.impl;

import com.example.db.model.DataFolder;
import com.example.db.repository.InMemoryDataFolderDAO;
import com.example.db.service.DataFolderService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class InMemoryDataFolderServiceImpl implements DataFolderService {

   private final InMemoryDataFolderDAO repository;
    @Override
    public List<DataFolder> findAllDataFolder() {
        return repository.findAllDataFolder();
    }

    @Override
    public DataFolder saveDataFolder(DataFolder dataFolder) {
        return repository.saveDataFolder(dataFolder);
    }

    @Override
    public DataFolder findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public DataFolder updateDataFolder(DataFolder dataFolder) {
        return repository.updateDataFolder(dataFolder);
    }

    @Override
    public void deleteDataFolder(Long id) {
   repository.deleteDataFolder(id);
    }
}
