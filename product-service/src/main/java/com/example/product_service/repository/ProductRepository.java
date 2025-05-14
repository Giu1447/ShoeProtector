package com.shoeprotector.productservice.repository;

import com.shoeprotector.productservice.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
