const { describe } = require("node:test");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("get office number of Manager", () => {
        it("should return the office number of the constructed manager", () => {
            const manager = new Manager("michael","1","michael@email.com","52");
            const office = manager.this.officeNumber;
            expect(office).toEqual("52");
        });
    });

    describe("get role of Manager", () => {
        it("should return the role of the constructed manager", () => {
            const manager = new Manager("michael","1","michael@email.com","52");
            const role = manager.getRole();
            expect(role).toEqual("Manager");
        });
    });
})