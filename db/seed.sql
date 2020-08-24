USE employees;

INSERT INTO department
    (name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Human Resources"),
    ("IT");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Sales Rep", 100000, 1),
    ("Mechanical Engineer", 120000, 2),
    ("Software Engineer", 130000, 2),
    ("Junior Engineer", 85000, 2),
    ("HR Rep", 80000, 3),
    ("IT Rep", 80000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Erin", "Platvoet", 1, 1),
    ("Manoli", "K", 2, 2),
    ("Hojin", "M", 2, NULL),
    ("Thomas", "M", 2, NULL),
    ("Kyle", "Andie", 3, 3),
    ("Ed", "Gibbons", 4, 4);
