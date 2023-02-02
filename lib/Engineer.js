class Engineer extends Employee {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub(){
        console.log(`${this.github}`);
    }

    getRole(){
        console.log("Engineer");
    }
}

module.exports = Engineer;