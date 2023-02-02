// const { describe } = require("node:test");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("get name of employee", () => {
        it("should return the name of the constructed employee", () => {
            const employee = new Employee("michael","1","michael@email.com");
            const name = employee.getName();
            expect(name).toEqual("michael");
        });
    });

    describe("get id of Employee", () => {
        it("should return the id of the constructed employee", () => {
            const employee = new Employee("michael","1","michael@email.com");
            const id = employee.getId();
            expect(id).toEqual("1");
        });
    });

    describe("get email of Employee", () => {
        it("should return the email of the constructed employee", () => {
            const employee = new Employee("michael","1","michael@email.com");
            const email = employee.getEmail();
            expect(email).toEqual("michael@email.com");
        })
    });

    describe("get role of Employee", () => {
        it("should return the role of the constructed employee", () => {
            const employee = new Employee("michael","1","michael@email.com");
            const role = employee.getRole();
            expect(role).toEqual("Employee");
        });
    });
})