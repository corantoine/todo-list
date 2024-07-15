------------------------------------------------- Création de la table tasks -------------------------------------------------
CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
task_name VARCHAR(250) NOT NULL,
due_date DATE,
);
