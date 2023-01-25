const employee = require("../lib/employee");


class manager extends employee{
    constructor(name, id, email, officenumber) {
        super(name, id, email)
        this.officenumber = officenumber;
    }
    getofficenumber() {
        return this.officenumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = engineer;