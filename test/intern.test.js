const Intern = require ('../lib/intern');

test('matches properties put in', () => {
    const intern= new Intern('Chris', 100, 'Chris@email.com', 'Bootcamp School')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})