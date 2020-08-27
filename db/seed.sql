USE employees;

INSERT INTO department
    (name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Sales Lead", 100000, 1),
    ("Sales Rep", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Acccount Manager", 160000, 3),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Jim", "Halpert", 1, NULL),
    ("Stanley", "Hudson", 2, 1),
    ("Michael", "Scott", 3, NULL),
    ("Dwight", "Schrute", 4, 3),
    ("Angela", "Martin", 5, NULL),
    ("Kevin", "Malone", 6, 5),
    ("Pam", "Beasley", 7, NULL),
    ("Erin", "Hannon", 8, 7);
