CREATE TABLE IF NOT EXISTS app_user
(
    id
    SERIAL
    PRIMARY
    KEY,
    name
    VARCHAR
(
    255
),
    email VARCHAR
(
    255
),
    password VARCHAR
(
    255
)
    );

-- Beispiel-Daten (optional)
INSERT INTO app_user (name, email, password)
VALUES ('Max Muster', 'max@example.com', 'pass123'),
       ('Anna Beispiel', 'anna@example.com', 'secure456');
