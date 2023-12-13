package com.example.db.controller;


import com.example.db.model.DataFolder;
import com.example.db.service.DataFolderService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/data_folder")
@AllArgsConstructor
public class DataFolderController {

    private final DataFolderService dataFolderService;
    @GetMapping
    public List<DataFolder> findAllDataFolder(){
        return dataFolderService.findAllDataFolder();
    }

    @PostMapping("save_dataFolder")
    public String saveDataFolder(@RequestBody DataFolder dataFolder){
        dataFolderService.saveDataFolder(dataFolder);
        return "DataFolder successfully saved";
    }

    @GetMapping("/{id}")
    public DataFolder findByDataFolder(@PathVariable Long id){
        return dataFolderService.findById(id);
    }

    @PutMapping("update_dataFolder")
    public DataFolder updateDataFolder(@RequestBody DataFolder dataFolder){
        return dataFolderService.updateDataFolder(dataFolder);
    }

    @DeleteMapping("delete_user/{id}")
    public void deleteDataFolder(@PathVariable Long id){
        dataFolderService.deleteDataFolder(id);

    }
}
