const inquirer = require("inquirer");
const connection = require("./db/connection");
const query = require("./db/queries");
require('console.table');

// const db = require("./db/connection");
main();

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userchoice",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      },
    ])
    .then((answer) => {
      console.log(answer);

      //   if (answer.userchoice === "View All Employees") {
      //     viewallEmployees();
      //   }
      // });
      switch (answer.userchoice) {
        case "View All Employees":
          viewallEmployees();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateRole();
          break;

        case "View All Roles":
          viewallRoles();
          break;

        case "Add Role":
          addRole();
          break;

        case "View All Departments":
          viewallDepartments();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Quit":
          console.log("You have exited the Application");
          connection.end();
          break;
      }
    });
}

function viewallEmployees() {
  connection
    .promise()
    .query(
      `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`
    )
    .then((data) => {
      console.table(data[0]);
    });
}

function viewallRoles() {
  connection
    .promise()
    .query(`SELECT * FROM role;`)
    .then((data) => {
      console.table(data[0]);
    });
}

function viewallDepartments() {
  connection
    .promise()
    .query(`SELECT * FROM department;`)
    .then((data) => {
      console.table(data[0]);
    });
}

function viewallDepartments() {
  connection
    .promise()
    .query(`SELECT * FROM department;`)
    .then((data) => {
      console.table(data[0]);
    });
}

//  let data = query.getallEmployees()
//  console.table(data[0]);
//   // (([rows]) => {
//   //   let employees = rows;
//   //   console.log("\n");
//   //   console.table(employees);
// });

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "departmentName",
        message: "What is the name of the department you would like to add?",
      },
    ])
    .then((answer) => {
      connection
        .promise()
        .query(
          `INSERT INTO department (name) VALUES ${answer.departmentName}`
        )
        .then((data) => console.table(data));
        // console.log(data);
    });
  // main();
}



// function addRole() {
//   const departmentChoices = () => {
//     connection
//       .promise()
//       .query(`SELECT * FROM department;`)
//       .then(([data]) => {
//         let departments = data;
//         const choices = departments.map(({id, name}) => ({name:name, value:id}))
//         return choices
//       });
   
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the name of the role you would like to add?",
      },

      {
        name: "salary",
        type: "input",
        message: "What is the salary?",
      },
      {
        name: "department_id",
        type: "list",
        message: ""
      }
    ])
    .then((answer) => {
      connection.promise()
      .query("INSERT INTO role SET ?", answer)
      .then((data) => console.table(data));
      console.log(`${answer.title} has been added`);
    });
    // main();
      
}
    







        // .promise()
        // .query(`SELECT * FROM department;`)
        // .then(([data]) => {
        //   let departments = data;
        //   const choices = departments.map(({id, name}) => ({name:name, value:id}))
        //   return choices
    
    
//     .then((answer) => {
//       connection
//         .promise()
//         .query(
//           `INSERT INTO role (title, salary) VALUES ('${answer.roleName}', ${answer.salary})`
//         )
//         .then((data) => console.table(data));
//     });
//   main();
// }
function addEmployee() {
  let data = query.addemployeeQuery();
  console.table(data[0]);
    };
// viewallEmployees().then(() => loadMainPrompts());

