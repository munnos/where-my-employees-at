const inquirer = require("inquirer");
const connection = require("./db/connection");
const query = require("./db/queries");
require("console.table");

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

// function viewallDepartments() {
//   connection
//     .promise()
//     .query(`SELECT * FROM department;`)
//     .then((data) => {
//       console.table(data[0]);
//     });
// }

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
          `INSERT INTO department (name) VALUES ('${answer.departmentName}')`
        )
        .then((data) => console.table(data[0]));
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
        message: "What department does the role belong to?",
        choices: [
          { value: 1, name: "Legal" },
          { value: 2, name: "Quality Control" },
          { value: 3, name: "Marketing" },
          { value: 4, name: "Business Development" },
          { value: 5, name: "Human Resources" },
        ],
      },
    ])
    .then((answer) => {
      connection
        .promise()
        .query("INSERT INTO role SET ?", answer)
        .then((data) => console.table(data[0]));
      console.log(`${answer.title} has been added`);
    });
  main();
}

function updateRole() {
  return connection.query(
    "SELECT Employee.first_name, Employee.last_name, employee.id, role.title, role.id FROM Employee LEFT JOIN Role ON Employee.id = Role.id",
    (err, res) => {
      inquirer
        .prompt([
          {
            name: "employee",
            type: "list",
            choices() {
              console.log("Console log response", res);
              return res.map(({ first_name, last_name, id }) => {
                return { name: first_name + " " + last_name, value: id };
              });
            },
            message: "Please select which employee you would like to update",
          },
          // ])
          // .then((employeeAnswer) => {
          //   console.log(employeeAnswer);
          //   const role = connection.query("SELECT * FROM role", (err, res) =>
          // inquirer.prompt([
          {
            name: "role",
            type: "list",
            choices() {
              console.log("Console log response", res);
              return res.map(({ id, title }) => {
                return { name: title, value: id };
              });
            },
            message:
              "Please select which role you would like to give the employee",
          },

          // console.log("this is employee answer", employeeAnswer),
        ])

        .then((answer) => {
          console.log(answer);
          connection.query(
            "UPDATE employee SET ? WHERE ?",
            [{ role_id: answer.role }, { id: answer.employee }],
            function (err, res) {
              if (err) throw err;
              console.log(`${answer.employee}'s role has been updated`);
            }
          );
        });
    }
  );
}

//   {
//     name: "role",
//     type: "list",
//     choices() {
//       console.log("Console log response", res);
//       return res.map(({ title, role_id}) => {
//         return {name: title, value: role_id};
//       });
//     },
//     message: "Select an updated role for this employee"
// },

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Enter employee's first name",
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter employee's surname",
      },
    ])
    .then((answer) => {
      const query = connection.query(
        "INSERT INTO employee SET ?",
        answer,
        (err, res) => {
          if (err) throw err;
          console.log(
            `${answer.first_name} ${answer.last_name} has been added as an employee`
          );
        }
      );
    });
}
// {
//   name: "role",
//   type: "list",

// }

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
// function addEmployee() {
//   let data = query.addemployeeQuery();
//   console.table(data[0]);
// }
// viewallEmployees().then(() => loadMainPrompts());
