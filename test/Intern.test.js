const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("can create new instance from the Intern constructor", () => {
        expect(typeof(new Intern())).toBe("object");
    });

    it("set github using Intern constructor arguments", () => {
        let newIntern = new Intern('Sasha', 2345, 'sasha@scoutreg.dev', 'washu')
        expect(newIntern.school).toBe('washu');
    });

    it("get github using Intern constructor getSchool() method", () => {
        let newIntern = new Intern('Sasha', 666, 'sasha@scoutreg.dev', 'washu')
        expect(newIntern.getSchool()).toBe('washu');
    });

    it("get Intern role using Intern constructor getRole() method", () => {
        let newIntern = new Intern('Sasha', 35565, 'sasha@scoutreg.dev', 'washu')
        expect(newIntern.getRole()).toBe('Intern');
    });
});