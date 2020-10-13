const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// variable set to an empty array, to push our employees too
const team = [];

//inquirer prompt to choose role
function employeeInformation() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee would you like to input",
        name: "name",
        choices: ["Manager", "Engineer", "Intern", "Show Summary"],
      },
    ])
    .then((val) => {
      if (val.name === "Manager") {
        managerInformation();
      } else if (val.name === "Engineer") {
        engineerInformation();
      } else if (val.name === "Intern") {
        internInformation();
      } else if (val.name === "Show Summary") {
        generateHTML(outputPath, render(team));
      }
    });
}

//prompt for information on manager
function managerInformation() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please Enter the Manager Name.",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the Manager ID#.",
        name: "id",
      },
      {
        type: "input",
        message: "Please Enter the Manager's Email address.",
        name: "email",
      },
      {
        type: "input",
        message: "Please Enter this managers office number.",
        name: "number",
      },
    ])
    .then(function (answer) {
      let manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.number
      );
      team.push(manager);

      employeeInformation();
    });
}

//prompt for info on engineer
function engineerInformation() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please Enter the Engineers Name.",
        name: "name",
      },
      {
        type: "input",
        message: "Please Enter this Engineers ID#.",
        name: "id",
      },
      {
        type: "input",
        message: "Please Enter this Engineers email.",
        name: "email",
      },
      {
        type: "input",
        message: "Please Enter this Engineers GitHub username.",
        name: "GitHub",
      },
    ])
    .then(function (answer) {
      let engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.GitHub
      );
      team.push(engineer);

      employeeInformation();
    });
}

//prompt to collect intern information
function internInformation() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter this intern's name.",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter this intern's ID#.",
        name: "id",
      },
      {
        type: "input",
        message: "Please Enter this intern's email address.",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the name of this interns school.",
        name: "school",
      },
    ])
    .then(function (answer) {
      let intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      team.push(intern);

      employeeInformation();
    });
}

//write HTML file
function generateHTML(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("You have sucessfully written your Employee Summary");
  });
}

//Call to start the employee role choice
employeeInformation();
