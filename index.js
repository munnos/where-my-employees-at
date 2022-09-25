const inquirer = require("inquirer");
const mysql = require('mysql2');
const db = require("./db/")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});

async function main() {
  await inquirer.prompt([
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
      ],
      suffix: ("(Use arrow keys", "(Move up and down to reveal more choices"),
    },
    
  ]);
}

main();
