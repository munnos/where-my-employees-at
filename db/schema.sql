DROP DATABASE IF EXISTS companyinfo_db;
CREATE DATABASE companyinfo_db;

USE companyinfo_db;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id),
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    manager_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (manager_id),
    REFERENCES manager(id),

);