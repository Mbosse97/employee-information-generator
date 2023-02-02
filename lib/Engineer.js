const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

    getCard() {
        return `<div class="card" style="width: 18rem;">
        <div class="card-header bg-primary">
          ${this.name}:
          Engineer
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
          <li class="list-group-item">Github: <a target ="_blank" href="https://github.com/${this.github}">${this.github}</a></li>
        </ul>
      </div>`;
    }
}

module.exports = Engineer;






