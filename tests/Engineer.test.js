// const { describe } = require("node:test");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("get github of Engineer", () => {
        it("should return the gihtub of the constructed Engineer", () => {
            const engineer = new Engineer("michael","1","michael@email.com","Mbosse97");
            const github = engineer.getGithub();
            expect(github).toEqual("Mbosse97");
        });
    });

    describe("get role of Engineer", () => {
        it("should return the role of the constructed Engineer", () => {
            const engineer = new Engineer("michael","1","michael@email.com","Mbosse97");
            const role = engineer.getRole();
            expect(role).toEqual("Engineer");
        });
    });
})