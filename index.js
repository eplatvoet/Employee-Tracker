//DEPENDENCIES
const mySql = require ("mysql");
const inquirer = require ("inquirer");
const cTable = require('console.table');

//CONNECTION SET UP
var connection = mysql.creatConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"12345678",
    database: "employees"
});

connection.connect(function(err) {
    if (err) throw err;
    //initial questions function:
});

//initial questions function:
function initialQuestion() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "initialQuestion",
          message:"What would you like to do?",
          choices:[
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role"
          ]
        }
    ])
    //depending on which answer, initiate next set of questions
    .then(function(answer) {
        switch (answer.action){
            case "View All Employees": 
                viewAll();
                break;
            case "View All Employees by Department":
                viewByDept();
                break;
            case "View All Employees by Manager":
                viewbyMan();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "Update Employee Role":
                updateRole();
                break;
        }
    });
}//copy & create "whatNext()", adding quit option
function whatNext() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "initialQuestion",
          message:"What would you like to do?",
          choices:[
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Quit"
          ]
        }
    ])
    //depending on which answer, initiate next set of questions
    .then(function(answer) {
        switch (answer.action){
            case "View All Employees": 
                viewAll();
                break;
            case "View All Employees by Department":
                viewByDept();
                break;
            case "View All Employees by Manager":
                viewbyMan();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "Update Employee Role":
                updateRole();
                break;
            case "Quit":
                //quit()
                break;
        }
    });
}

//create functions:
// viewAll()
// viewByDept()
// viewbyMan()
// addEmployee()
// removeEmployee()
// updateRole()
// quit()

    //only single digit allowed for manager id (make a code for that)

//STARTS ENQUIRER:
initialQuestion();