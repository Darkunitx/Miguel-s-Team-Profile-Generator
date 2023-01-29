const Employee = require ('../lib/employee');

test('matches properties put in', () => {
    const employee = new Employee('Miguel', 29, 'Miguel@email.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})