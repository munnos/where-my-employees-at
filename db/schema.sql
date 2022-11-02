DROP DATABASE IF EXISTS companyinfo_db;
CREATE DATABASE companyinfo_db;

USE companyinfo_db;

GLOBAL SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL, 
    FOREIGN KEY (department_id)
    REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL DEFAULT 6, 
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);