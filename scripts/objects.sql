CREATE TABLE objects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    prop1 DATE NOT NULL,
    prop2  VARCHAR(255) NOT NULL,
    prop3 INT NOT NULL
);

INSERT INTO objects (title, prop1, prop2, prop3) VALUES
    ('ObjectA', '2024-01-15', 'Alpha', 42),
    ('ObjectB', '2023-07-22', 'Beta', 87),
    ('ObjectC', '2022-11-10', 'Gamma', 15),
    ('ObjectD', '2021-05-30', 'Delta', 64),
    ('ObjectE', '2020-09-17', 'Epsilon', 29);