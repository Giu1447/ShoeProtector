CREATE TABLE IF NOT EXISTS product
(
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DOUBLE PRECISION,
    imageurl VARCHAR(255)
    );

INSERT INTO product (id, name, description, price, imageurl)
VALUES (1, 'Shoe Cleaner', 'Reinigt deine Schuhe gründlich', 9.99, '/images/placeholder1.jpg'),
       (2, 'Waterproof Spray', 'Schützt deine Schuhe vor Wasser', 14.49, '/images/placeholder2.jpg'),
       (3, 'Shoe Polish', 'Verleiht Glanz und schützt', 7.99, '/images/placeholder3.jpg'),
       (4, 'Shoe Laces', 'Langlebige Schnürsenkel', 3.49, '/images/placeholder4.jpg'),
       (5, 'Shoe Insoles', 'Bequeme Einlegesohlen', 12.49, '/images/placeholder5.jpg');
