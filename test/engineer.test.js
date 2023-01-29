const engineer = require ('../lib/engineer');

test('matches engineer', () => {
    const engineer = new engineer('Bob', 12, 'Bob@email.com', '')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.age).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})