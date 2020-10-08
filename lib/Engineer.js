//Engineer Class that inherits the Employee Class
const Employee = require("../lib/Employee.js");

//Engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  //get Github Method

  getGithub() {
    return this.github;
  }
  //get role
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
