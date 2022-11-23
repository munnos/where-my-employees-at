# where-my-employees-at

![MIT license badge](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

- This is a command line application managing an employee database built using MySQL. The application allows a user to add departments, roles and employees, 
in addition to updating an existing employee role.

- The application makes use of the npm packages inquirer and mysql2. The use of inquirer allows the use of the command line prompts to update the database. Mysql2 made it easier to
query the database using javascript due to the functionality the package offers.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Screenshot](#screenshot)
* [Technologies](#technologies)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
* [Link to deployed application](#link-to-deployed-application)

## Installation

To install the required npm packages to run the application, firstly run `npm i` or `npm install` in the command line at the root of the directory. This will install all 
of the required npm packages for the application.

## Usage

- Following installation of the required npm packages the user should connect to MySQL. Firstly, the user may want to update the details at line 4-10 of connection.js to connect to their mysql.
- To do this, run "mysql -u root [name of user here (usually will be 'root)] -p" in the terminal command line to open up mysql. Folowing this, the user will have entered mysql and then should create the database by running "source db/schema.sql".
- Then whilst in mysql, the user should run "source db/schema.sql" firstly to connect to the database and then they should run "source db/seeds.sql" to seed the database data. Following this type exit 
- Then run "exit" to exit the mysql interface back to the terminal.
- Once back in the terminal, run "node index.js" to start the application.
- From here you can explore all the functionality of the application. See link to video at the below.

## Screenshots

![image](https://user-images.githubusercontent.com/88617634/203573139-5054da6d-d52e-443f-9b3f-3b78055e1f3b.png)

![image](https://user-images.githubusercontent.com/88617634/203572970-c1f036fd-2d61-48f1-b9b2-05180ada5fe8.png)

![image](https://user-images.githubusercontent.com/88617634/203573061-3b1bd08f-4cea-4f7e-80fa-4c4a2243cb44.png)

![image](https://user-images.githubusercontent.com/88617634/203573252-ccfea37c-7b16-4f40-ab8b-dc5c320d9857.png)

## Technologies

- MySQL
- Node JS
- Inquirer

## License

This project is covered under the MIT License

This project has been generated under license from MIT.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright 2022 Michael Munn

![MIT license badge](https://img.shields.io/badge/license-MIT-blue.svg)

## Tests

Testing was not required for this application.

## Questions

If you have any questions regarding this project or the contents of this repository, please contact me at https://github.com/munnos.
## Link to deployed application

link to instructional video - https://drive.google.com/file/d/1aze7ZudkCWdBs4Cxp0wR17-caCpCjsQY/view

Link to deployed application - https://github.com/munnos/where-my-employees-at
