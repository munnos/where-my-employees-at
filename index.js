const inquirer = require("inquirer");
const query = require("./db/queries");


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
          "Add Department"
        ]
      }
    ])
    .then((answer) => {
      console.log(answer);

      if (answer.userchoice === "View All Employees") {
        viewallEmployees();
      }
    });
}

async function viewallEmployees() {
 const data = await query.getallEmployees()
 console.table(data[0]);
  // (([rows]) => {
  //   let employees = rows;
  //   console.log("\n");
  //   console.table(employees);
  // });
}
// viewallEmployees().then(() => loadMainPrompts());



