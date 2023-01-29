const Manager = require ('../lib/manager');

test('matches properties put in', () => {
    const manager = new Manager('Victor', 2, 'Victor@email.com', 76575674)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.Officenumber).toEqual(expect.any(Number));
})