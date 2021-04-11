const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("can create new instance from the Manager constructor", () => {
        expect(typeof(new Manager())).toBe("object");
    });

    it("set office number using Manager constructor arguments", () => {
        let newManager = new Manager('Mikasa', 33, 'mikasa@scoutreg.dev', 5330000000)
        expect(newManager.officeNumber).toBe(5330000000);
    });

    it("get office number using Manager constructor getofficeNumber() method", () => {
        let newManager = new Manager('Mikasa', 33, 'mikasa@scoutreg.dev', 5330000000)
        expect(newManager.getofficeNumber()).toBe(5330000000);
    });

    it("get Manager role using Manager constructor getRole() method", () => {
        let newManager = new Manager('Mikasa', 33, 'mikasa@scoutreg.dev', 5330000000)
        expect(newManager.getRole()).toBe('Manager');
    });
});
