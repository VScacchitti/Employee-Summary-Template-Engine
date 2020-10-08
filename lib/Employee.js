// Employee Class to be exported

class Employee {
  //constructor method
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // get Name method
  getName() {
    return this.name;
  }
  //get Id method
  getId() {
    return this.id;
  }
  //get Email method
  getEmail() {
    return this.email;
  }
  // get role method
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
