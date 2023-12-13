package com.example.db.repository;

import com.example.db.model.DataFolder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataFolderRepository extends JpaRepository<DataFolder, Long> {
void deleteById(Long id);
DataFolder findDataFolderById(Long id);
}
