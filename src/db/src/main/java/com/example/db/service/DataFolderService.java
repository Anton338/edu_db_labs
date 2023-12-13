package com.example.db.service;

import com.example.db.model.DataFolder;


import java.util.List;

public interface DataFolderService {

   List<DataFolder> findAllDataFolder();

    DataFolder saveDataFolder(DataFolder dataFolder);

    DataFolder findById(Long id);

    DataFolder updateDataFolder(DataFolder dataFolder);

    void deleteDataFolder(Long id);
}
