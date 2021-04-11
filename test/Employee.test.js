const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("can create new instance from the Employee constructor", () => {
    expect(typeof(new Employee())).toBe("object");
  });

  it("set name using Employee constructor arguments", () => {
    let Name = new Employee('Eren')
    expect(Name.name).toBe('Eren');
  });

  it("set id using Employee constructor arguments", () => {
    let Name = new Employee('Eren', 66)
    expect(Name.id).toBe(66);
  });

  it("set email using Employee constructor arguments", () => {
    let Name = new Employee('Eren', 66, 'eren@titans.com')
    expect(Name.email).toBe('eren@titans.com');
  });

  it("get name using Employee constructor's getName() method ", () => {
    let Name = new Employee('Eren', 66, 'eren@titans.com')
    expect(Name.getName()).toBe('Eren');
  });

  it("get id using Employee constructor's getId() method ", () => {
    let Name = new Employee('Eren', 77, 'eren@titans.com')
    expect(Name.getId()).toBe(77);
  });

  it("get email using Employee constructor's getEmail() method ", () => {
    let Name = new Employee('Eren', 66, 'eren@titans.com')
    expect(Name.getEmail()).toBe('eren@titans.com');
  });

  it("get Employee role using Employee constructor's getRole() method ", () => {
    let Name = new Employee()
    expect(Name.getRole()).toBe('Employee');
  });

})
