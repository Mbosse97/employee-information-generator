const { describe } = require("node:test");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("get school of intern", () => {
        it("should return the school of the constructed intern", () => {
            const intern = new Intern("michael","1","michael@email.com","USYD");
            const school = intern.getSchool();
            expect(school).toEqual("USYD");
        });
    });

    describe("get role of Intern", () => {
        it("should return the role of the constructed Intern", () => {
            const intern = new Intern("michael","1","michael@email.com","USYD");
            const role = intern.getRole();
            expect(role).toEqual("Intern");
        });
    });
})