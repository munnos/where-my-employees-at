-- Data to seed into database


INSERT INTO department (name)
VALUES ("Legal"),
        ( "Quality Control"),
        ( "Marketing"),
        ( "Business Development"),
        ( "Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ( "General Counsel", 35000, 1),
        ( "Manager", 45000, 4),
        ( "Paralegal", 18000, 1),
        ( "HR Advisor", 22000, 4),
        ( "Quality Assurance Analyst", 32000, 2),
        ("Employee", 20000, 1);

INSERT INTO employee (first_name, last_name, role_id,  manager_id)
VALUES ( "Paul", "Smith", 4, NULL),
        ( "Elizabeth", "Holmes", 2, NULL),
        ( "Jeffrey", "Skilling", 3, 1),
        ( "Ken", "Lay", 4, NULL),
        ( "Fred", "Goodwin", 3, 1),
        ( "Markus", "Braun", 2, NULL),
        ( "Adam", "Neumann", 1, NULL),
        ( "Nick", "Leeson", 1, NULL),
        ( "Tom", "Hayes", 2, NULL),
        ( "Jho", "Low", 5, 4);








