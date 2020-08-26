// const inquirer = require ("inquirer");
// const cTable = require('console.table');
// // const dbIndex = require("./db/index")
// const connection = require("./connection")
// const mysql = require("mysql");

// //INITIAL QUESTIONS:
// function userQuestions() {
//     inquirer
//       .prompt([
//         {
//           type: "list",
//           name: "userQuestions",
//           message:"What would you like to do?",
//           choices:[
//             "View All Employees",
//             "View All Employees by Department",
//             "View All Employees by Manager",
//             "Add Employee",
//             "Add Role",
//             "Add Department",
//             "Update Employee/Role",
//             "Update Department",
//             "Quit"
//           ]
//         }
//     ])
//     //USER'S CHOICE WILL LEAD TO A FOLLOW-UP FUNCTION
//     .then(function(answer) {
//         switch (answer.action){
//             case "View All Employees": 
//                 viewAll();
//                 break;
//             case "View All Employees by Department":
//                 viewByDept();
//                 break;
//             case "View All Employees by Manager":
//                 viewbyMan();
//                 break;
//             case "Add Employee":
//                 addEmployee();
//                 break;
//             case "Add Role":
//                 addRole();
//                 break;
//             case "Add Department":
//                 addDept();
//                 break;
//             case "Update Employee":
//                 updateEmployee();
//                 break;
//             case "Update Role":
//                 updateRole();
//                 break;
//             case "Update Department":
//                 updateDept();
//                 break;
//             case "Quit":
                    
//                 break;
//         }
//     });
// }


   

// //create functions:
// function viewAll(){
//     var query = "SELECT * FROM employee"
//     connection.query(query, function(err, res) {
//         console.table(res);
//         userQuestions();
//     })
// }
// function viewByDept(){
//  var query = "SELECT name, id from employees.department ORDER BY id asc";
//  connection.query(query, function(err, res) {
//     console.table(res);
//     userQuestions();
//  });   
// }
// //function viewbyMan(){
//     //
// //}

// function addEmployee(){
//     inquirer.prompt([
//         {
//             type: "prompt",
//             name: "first_name",
//             message: "What is the employee's first name?"
//         },
//         {
//             type: "prompt",
//             name: "last_name",
//             message: "What is the employee's last name?"
//         },
//         {
//             type: "prompt",
//             name:"role_id",
//             message: "What is the employee's Role ID #?"
//         },
//         {
//             type: "prompt",
//             name: "manager_id",
//             message:"What is the employee's manager ID?"
//         }
//     ])
//      .then(function(answer){
//          connection.query(
//             "INSERT INTO employee SET ?",
//             {
//                 first_name: answer.first_name,
//                 last_name: answer.last_name,
//                 role_id: answer.role_id,
//                 manage_id: answer.manager_id
//             },
//             function(err) {
//                 if (err) throw err;
//             }
//          ) 

//      })
//      userQuestions();
// }

// function addDept() {
//     inquirer
//         .prompt({
//             type: "input",
//             name: "newDept",
//             message: "What is the name of the new department?"
//         })
//         .then(function(answer) {
//             var query = "INSERT INTO department (name) VALUES (?)";
//             connection.query(query, answer.newDept, function(err, res) {
//                 console.log("new dept created successfully");
//                 if (err) throw err;
//             })
//         })
//         userQuestions();

// }
// //function removeEmployee(){
// //     inquirer.prompt({
// //         type: "input",
// //         name: "deleteEmp",
// //         message: "What employee would you like to delete"
// //     })
// //     var query = "DELETE employee ?";
// //     connection.query(query, { employee: answer.deleteEmp }, function(err, res) {

// //     })
// // }
// //function updateRole(){}
// // quit(){}

//     //only single digit allowed for manager id (make a code for that)

// //STARTS ENQUIRER:
// userQuestions();