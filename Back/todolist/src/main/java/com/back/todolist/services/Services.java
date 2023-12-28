package com.back.todolist.services;

import com.back.todolist.model.Item;
import com.back.todolist.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class Services {
    @Autowired
    private Repository repository;

    public ResponseEntity<?> create (@RequestBody Item request) {
        Item response = repository.save (request);
        return new ResponseEntity<> (response, HttpStatus.CREATED);
    }

    public ResponseEntity<?> deletar (@PathVariable Long id) {
        repository.deleteById (id);
        return new ResponseEntity<> (HttpStatus.OK);
    }

    public List<Item> list () {
        return repository.findAll ();
    }
}
