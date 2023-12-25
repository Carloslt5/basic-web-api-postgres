
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT
);

INSERT INTO posts (title, body) VALUES
    ('sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'),
    ('Lorem Ipsum Dolor Sit Amet', 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
    ('Post con título 3', 'Contenido del tercer post. Puedes agregar más detalles según sea necesario.'),
    ('Título del cuarto post', 'Contenido del cuarto post. Esto es solo un ejemplo, ajusta según tus necesidades.'),
    ('Último post', 'Este es el último post de ejemplo. ¡Espero que te sirva como referencia!');
