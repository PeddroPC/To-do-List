package com.back.todolist.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "item")
@Data

public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tarefa;
}
