const userModel = require('../models/users.model')
const bcrypt = require('bcrypt');

const addNewUser = (newUser) => userModel.create(newUser);

const findByPasswordAndEmail =  async (email, password) => {

    let user = await userModel.findOne({email: email}).exec();
    console.log('user', user);
    let value;
    if (user) {
        value = await bcrypt.compare(password, user.password);
    }
    if (value) return user;
    return null;
}
module.exports = {
    addNewUser,
    findByPasswordAndEmail
}
