package com.shoeprotector.productservice.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
    @Id
    private Long id;
    private String name;
    private String description;
    private double price;

    // Getter und Setter
}
