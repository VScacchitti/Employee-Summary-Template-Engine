const Employee = require("../lib/Employee.js");
// Intern Class

class Intern extends Employee {
  //intern constructor
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  //get school method
  getSchool() {
    return this.school;
  }

  //get role method
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
