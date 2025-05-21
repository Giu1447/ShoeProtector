CREATE TABLE IF NOT EXISTS product
(
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DOUBLE PRECISION,
    imageurl VARCHAR(255)
    );

INSERT INTO product (id, name, description, price, imageurl)
VALUES (1, 'Shoe Cleaner', 'Reinigt deine Schuhe gründlich', 15.50, '../../public/images/Shoe_Cleaner.png'),
       (2, 'Waterproof Spray', 'Schützt deine Schuhe vor Wasser', 25.50, '../../public/images/splash-protectors.jpeg'),
       (3, 'Shoe Polish', 'Verleiht Glanz und schützt', 8.95, '../../public/images/Shoe-polish.png'),
       (4, 'Shoe Laces', 'Langlebige Schnürsenkel', 801.75, '../../public/images/shoelace.png'),
       (5, 'Shoe Insoles', 'Bequeme Einlegesohlen', 4.95, '../../public/images/Shoe-sole.png');
