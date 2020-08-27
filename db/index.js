const inquirer = require ("inquirer");
const cTable = require('console.table');
const connection = require("./db/connection");
const mysql = require("mysql");

//INITIAL QUESTIONS:
function userQuestions() {
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "userQuestions",
          message:"What would you like to do?",
          choices:[
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "Add Employee",
            "Add Role",
            "Add Department",
            "Update Employee/Role",
            "Quit"
          ]
        }
    ])
    //USER'S CHOICE WILL LEAD TO A FOLLOW-UP FUNCTION
    .then(function(answer) {
        switch (answer.userQuestions){
            case "View All Employees": 
                viewAll();
                break;
            case "View All Departments":
                viewDept();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Department":
                addDept();
                break;
            case "Update Employee/Role":
                updateInfo();
                break;
            case "Quit":
                quitQuestions();    
                break;
        }
    });
}

//FUNCTIONS DEPENDING ON USER'S ANSWER, AND WILL REPROMPT USER ON INITIAL QUESTIONS
function viewAll(){
    var query = "SELECT * FROM employee"
    connection.query(query, function(err, res) {
        console.table(res);
        userQuestions();
    })
}

function viewDept(){
 var query = "SELECT name, id from employees.department ORDER BY id asc";
 connection.query(query, function(err, res) {
    console.table(res);
    userQuestions();
 });   
}
function viewRoles(){
    var query = "SELECT * from role"
    connection.query(query, function(err, res){
        console.table(res);
        userQuestions();
    })
    
}

function addEmployee(){
    inquirer.prompt([
        {
            type: "prompt",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "prompt",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "prompt",
            name:"role_id",
            message: "What is the employee's Role ID #?"
        },
        {
            type: "prompt",
            name: "manager_id",
            message:"What is the employee's manager ID?"
        }
    ])
     .then(function(answer){
        var query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)"; 
        connection.query(query, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function (err, res) {
            if (err) throw err;
            console.log(`${answer.first_name} ${answer.last_name} was successfully added to the database.`);
            userQuestions();
        })
     })
}

function addRole() {
    inquirer
        .prompt([
        {
            type:"input",
            name:"newRole",
            message: "What is the title of the new role?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type:"input",
            name: "department_id",
            message: "What department is this role in? (1 - Sales, 2 - Engineering, 3 - Finance, 4 - Legal)"
        }
    ])
    .then(function(answer){
        var query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
        connection.query(query, [answer.title, answer.salary, answer.department_id], function (err, res) {
            if (err) throw err;
            console.log(`The role "${answers.title}" was successfully added to the database.`);
            userQuestions();
        })
    })
}

function addDept() {
    inquirer
        .prompt({
            type: "input",
            name: "newDept",
            message: "What is the name of the new department?"
        })
        .then(function(answer) {
            var query = "INSERT INTO department (name) VALUES (?)";
            connection.query(query, answer.newDept, function(err, res) {
                console.log(`The new department, ${answer.newDept}, was created successfully.`);
                if (err) throw err;
                userQuestions();
            })
        })

}

function updateInfo(){
    inquirer
        .prompt([
            {
                type: "input",
                name: "currentEmpID",
                message: "What is the ID of the employee you would like to update?"
            },
            {
                type: "input",
                name: "newTitle",
                message: "What is the title of their new role?"
            },
            {
                type: "input",
                name: "newSalary",
                message: "What is their new salary?"
            },
            {
                type: "input",
                name: "newRoleID",
                message: "What department will this role belong to? (1 - Sales, 2 - Engineering, 3 - Finance, 4 - Legal)"
            }
    ])
        .then(function(answer) {
            var query = "UPDATE role SET title = ?, salary = ?, department_id = ? WHERE id = ?";
            connection.query(query, [answer.newTitle, answer.newSalary, answer.newRoleID, parseInt(answer.currentEmpID)], function(err, res) {
                if (err) throw err;
                console.log("Employee Update was successful!");
                userQuestions();
            })
        })
}


//function removeEmployee(){
//     inquirer.prompt({
//         type: "input",
//         name: "deleteEmp",
//         message: "What employee would you like to delete"
//     })
//     var query = "DELETE employee ?";
//     connection.query(query, { employee: answer.deleteEmp }, function(err, res) {

//     })
// }
function quitQuestions(){
    process.exit();
}


//STARTS INQUIRER:
userQuestions();