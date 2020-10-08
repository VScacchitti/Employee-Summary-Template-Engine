const Employee = require("../lib/Employee.js");

// Manager Class

class Manager extends Employee {
  //Manager Constructor
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  //Office Number Method
  getOfficeNumber() {
    return this.officeNumber;
  }

  //Get Role
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
