package com.back.todolist.controller;

import com.back.todolist.model.Item;
import com.back.todolist.services.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tarefa")
@CrossOrigin(origins = "http://localhost:5173")
public class Controller {

    @Autowired
    private Services services;

    @PostMapping ("/create")
    public ResponseEntity<?> create (@RequestBody Item request) {
        return services.create (request);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id){
        return services.deletar (id);
    }

    @GetMapping ("/list")
    public List<Item> list () {
        return services.list ();
    }
}
