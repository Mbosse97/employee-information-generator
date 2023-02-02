const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getCard() {
        return `<div class="card" style="width: 18rem;">
        <div class="card-header bg-primary">
          ${this.name}:
          Manager
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
          <li class="list-group-item">Office Number: ${this.officeNumber}</li>
        </ul>
      </div>`;
      }
}

module.exports = Manager;