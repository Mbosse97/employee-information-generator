class Intern extends Employee {
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getSchool(){
        console.log(`${this.school}`);
    }

    getRole(){
        console.log("Intern");
    }
}

module.exports = Intern;