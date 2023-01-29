const Engineer = require ('../lib/engineer');

test('matches properties put in', () => {
    const engineer = new Engineer('Bob', 12, 'Bob@email.com', 'Bobgithub')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})