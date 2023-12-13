package com.example.db.repository;

import com.example.db.model.DataFolder;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

@Repository
public class InMemoryDataFolderDAO {
    private final List<DataFolder> DATAFOLDERS =new ArrayList<>();

    public List<DataFolder> findAllDataFolder() {
        return DATAFOLDERS;
    }

    public DataFolder saveDataFolder(DataFolder dataFolder) {
       DATAFOLDERS.add(dataFolder);
        return dataFolder;
    }

    public DataFolder findById(Long id) {
        return DATAFOLDERS.stream()
                .filter(element -> element.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public DataFolder updateDataFolder(DataFolder dataFolder) {
        var dataFolderIndex = IntStream.range(0, DATAFOLDERS.size())
                .filter(index -> DATAFOLDERS.get(index).getId().equals(dataFolder.getId()))
                .findFirst()
                .orElse(-1);
        if (dataFolderIndex > -1) {
            DATAFOLDERS.set(dataFolderIndex, dataFolder);
            return dataFolder;
        }
        return null;
    }

    public void deleteDataFolder(Long id) {
        var dataFolderIndex = findById(id);
        if (dataFolderIndex != null) {
            DATAFOLDERS.remove(dataFolderIndex);
        }

    }
}
