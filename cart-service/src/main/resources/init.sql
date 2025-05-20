CREATE TABLE cart_item
(
    id         SERIAL PRIMARY KEY,
    user_id    BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity   INT    NOT NULL
);

INSERT INTO cart_item (user_id, product_id, quantity)
VALUES (1, 1, 2),
       (1, 2, 1),
       (2, 1, 5);
