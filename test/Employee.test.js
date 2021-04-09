// const Employee = require("../lib/Employee")

// describe("Employee Class", () => {
//     it("should create an object with a name")
//     const name = new Employee("Riheel");
//     // const id = new Employee("05");
//     expect(name.name).toBe(true)
// })

const validator = require("../lib/Employee");

describe('validator', () => {
  it('should return true for an object with no criteria', () => {
    const obj = { username: 'sam21'};
    expect(validator(obj, null).valid).toBe(true);
  });

  it('should pass an object that meets a criteria', () => {
      const obj = {username: 'sam123'};
      const criteria = obj => obj.username.length >= 6
      expect(validator(obj, criteria).valid).toBe(true);
  })
  it('should fail an object that meets a criteria', () => {
    const obj = {username: 'sam12'};
    const criteria = obj => obj.username.length >= 6
  
    expect(validator(obj, criteria).valid).toBe(false);
})

});

