// const Employee = require("../lib/Employee")

// describe("Employee Class", () => {
//     it("should create an object with a name")
//     const name = new Employee("Riheel");
//     // const id = new Employee("05");
//     expect(name.name).toBe(true)
// })

const Employee = require("../lib/Employee");

describe('validator', () => {
  it("should set 'number' when created", () => {
    const num = "baska"";

    const obj = new Employee("riheel" ,num, "email");

    expect(num).toBe(true);
  });

});

