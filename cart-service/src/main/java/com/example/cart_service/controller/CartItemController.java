package com.example.cartservice.controller;

import com.example.cartservice.model.CartItem;
import com.example.cartservice.repository.CartItemRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartItemController {

    private final CartItemRepository repository;

    public CartItemController(CartItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{userId}")
    public List<CartItem> getCartItems(@PathVariable Long userId) {
        return repository.findByUserId(userId);
    }

    @PostMapping
    public CartItem addCartItem(@RequestBody CartItem item) {
        return repository.save(item);
    }

    @DeleteMapping("/{id}")
    public void deleteCartItem(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
