// class Queries {
//     constructor (connection){
//         this.connection =  connection;
//     }

//     WHEN I choose to view all roles
//     THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
//     WHEN I choose to view all employees
 
//     THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
//     getAllDeparments(){
//             WHEN I choose to view all departments
//         THEN I am presented with a formatted table showing department names and department ids
//         return this.connection.promise().query(`SELECT * FROM department`)        
//     }


// findAllEmployees(){
//     return this.connection.promise().query(
//       `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`
// );
//     };
// }