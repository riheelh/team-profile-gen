const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("can create new instance from the Engineer constructor", () => {
        expect(typeof(new Engineer())).toBe("object");
    });

    it("set github using Engineer constructor arguments", () => {
        let newEngineer = new Engineer('Levi', 2345, 'levi@scoutreg.dev', 'GitLevi')
        expect(newEngineer.github).toBe('GitLevi');
    });

    it("get github using Engineer constructor getGithub() method", () => {
        let newEngineer = new Engineer('Levi', 666, 'levi@scoutreg.dev', 'GitLevi')
        expect(newEngineer.getGithub()).toBe('GitLevi');
    });

    it("get Engineer role using Engineer constructor getRole() method", () => {
        let newEngineer = new Engineer('Levi', 35565, 'levi@scoutreg.dev', 'GitLevi')
        expect(newEngineer.getRole()).toBe('Engineer');
    });
});