// const { describe } = require("node:test");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    
    describe("get role of Manager", () => {
        it("should return the role of the constructed manager", () => {
            const manager = new Manager("michael","1","michael@email.com","52");
            const role = manager.getRole();
            expect(role).toEqual("Manager");
        });
    });
})