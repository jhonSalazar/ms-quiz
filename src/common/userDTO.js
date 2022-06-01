class UserDTO {
    constructor(model) {
        this.email = model.email;
        this.firstName = model.firstName;
        this.lastName = model.lastName;
    }
}

module.exports = UserDTO;
