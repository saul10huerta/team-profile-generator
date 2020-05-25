const Employee = require('../lib/Employee');

// constructor test for employee object
test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});



// contructor test for name argument
test('set name via the constructor', () => {
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

// constructor test for the id argument
test('set ID via the constructor', () => {
    const id = 1234
    const employee = new Employee(name, id);
    expect(employee.id).toBe(id);
});

// constructor test for the email argument
test('set email via the constructor', () => {
   const email = "hello@tmail.com";
   const employee = new Employee(name, 1234, email);
   expect(employee.email).toBe(email);
});




// test to return the employee's name
test("return the employee's name?", () => {
   const employee = new Employee(name);
   expect(employee.getName()).toBe(name);
});

// test to return the employee's id
test("return the employee's id?", () => {
   const id = 1234;
   const employee = new Employee(name, id);
   expect(employee.getId()).toBe(id);
})

// test to return the employee's email
test("return the employee's email?", () => {
    const email = "hello@tmail.com";
    const employee = new Employee(name, 1234, email);
   expect(employee.getEmail()).toBe(email);
});

// test to return the employee's role
test("return the employee's role?", () => {
    const email = "hello@tmail.com";
    const role = 'Employee';
    const employee = new Employee(name, 1234, email);
    expect(employee.getRole()).toBe(role);
});