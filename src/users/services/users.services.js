const userDao = require("../daos/user.dao")

const findByPasswordAndEmail = async (email, password) => {
    return userDao.findByPasswordAndEmail(email, password)
}

const addNewUser = async (user) => {
    return userDao.addNewUser(user);
}

const findByEmail = async (email) => {
    return userDao.findByEmail(email)
}

module.exports = {
    findByPasswordAndEmail,
    addNewUser,
    findByEmail
}
