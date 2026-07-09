package com.example.cropapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cropapi.Crop;

import java.util.List;

@Service
public class CropService {

    @Autowired
    private CropRepository repo;

    public List<Crop> getAllCrops() {
        return repo.findAll();
    }

    public Crop addCrop(Crop crop) {
        return repo.save(crop);
    }

    public void deleteCrop(Long id) {
        repo.deleteById(id);
    }
}
