CREATE TABLE IF NOT EXISTS orders
(
    id BIGINT PRIMARY KEY,
    product_name VARCHAR(255),
    quantity INT
    );

-- Beispiel-Daten (optional)
INSERT INTO orders (id, product_name, quantity)
VALUES (1, 'Sneaker Cleaner', 2),
       (2, 'Waterproof Spray', 1);
