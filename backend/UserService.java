package com.example.cropapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cropapi.entity.User;
import com.example.cropapi.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public String register(User user) {

        if (repository.findByUsername(user.getUsername()) != null) {
            return "Username already exists";
        }

        repository.save(user);
        return "User Registered Successfully";
    }

    public String login(User user) {

        User dbUser = repository.findByUsername(user.getUsername());

        if (dbUser == null) {
            return "User Not Found";
        }

        if (dbUser.getPassword().equals(user.getPassword())) {
            return "Login Successful";
        }

        return "Invalid Password";
    }
}
