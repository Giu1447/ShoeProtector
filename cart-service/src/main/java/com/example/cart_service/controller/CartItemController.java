package com.example.cartservice.controller;

import com.example.cartservice.model.CartItem;
import com.example.cartservice.repository.CartItemRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "*")
public class CartItemController {

    private final CartItemRepository repository;

    public CartItemController(CartItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{userId}")
    public List<CartItem> getCartItems(@PathVariable Long userId) {
        return repository.findByUserId(userId);
    }

    // DELETE CartItem mit userId und itemId
    @DeleteMapping("/{userId}/item/{itemId}")
    public void deleteCartItem(@PathVariable Long userId, @PathVariable Long itemId) {
        // Optional: prüfen, ob itemId zum userId gehört (Sicherheit)
        repository.deleteById(itemId);
    }

    @PostMapping
    public CartItem addOrUpdateCartItem(@RequestBody CartItem item) {
        if (item.getQuantity() <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than 0");
        }

        CartItem existingItem = repository.findByUserIdAndProductId(item.getUserId(), item.getProductId());

        if (existingItem != null) {
            existingItem.setQuantity(existingItem.getQuantity() + item.getQuantity());
            return repository.save(existingItem);
        } else {
            return repository.save(item);
        }
    }

    // PUT-Endpunkt für Menge aktualisieren
    @PutMapping("/{userId}/item/{itemId}")
    public CartItem updateCartItemQuantity(@PathVariable Long userId, @PathVariable Long itemId, @RequestBody CartItem item) {
        CartItem existingItem = repository.findById(itemId).orElseThrow(() -> new RuntimeException("Item nicht gefunden"));

        if (!existingItem.getUserId().equals(userId)) {
            throw new RuntimeException("Kein Zugriff auf dieses Item");
        }

        if (item.getQuantity() <= 0) {
            throw new IllegalArgumentException("Quantity muss > 0 sein");
        }

        existingItem.setQuantity(item.getQuantity());
        return repository.save(existingItem);
    }

    @DeleteMapping("/clear/{userId}")
    public void clearCart(@PathVariable Long userId) {
        repository.deleteByUserId(userId);
    }
}
