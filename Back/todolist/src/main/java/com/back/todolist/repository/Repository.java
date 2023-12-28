package com.back.todolist.repository;

import com.back.todolist.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface Repository extends JpaRepository<Item, Long> {

}
