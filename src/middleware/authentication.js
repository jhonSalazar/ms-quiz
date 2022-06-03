const ResponseDTO = require('../common/responseDTO');
const userServices = require('../users/services/users.services');
const jwt = require('jsonwebtoken');
const Const = require("../common/const")
const authenticateJwt = async (req, res, next) => {
    const bearerAuthentication = req.headers.authorization;
    try {

        if (bearerAuthentication) {
            const token = bearerAuthentication.split('Bearer ')[1];
            let decodedSecret = jwt.verify(token, 'secretKeyJwt');
            let user = await userServices.findByEmail(decodedSecret.data.email);
            if (!user) {
                throw new Error(`user not found, token: ${token}, decoded: ${JSON.stringify(decodedSecret)}`)
            }
            req.clientInfo = {...user, userId: user._id};
            next()
        } else {
            res.status(401).json(
                new ResponseDTO(null, 'Authorization header not found', null)
            );
        }
    } catch (err) {
        console.log('error jwt: ', err);
        res.status(401).json(
            new ResponseDTO(null, err.code + ' - ' + err.message, Const.STATUS_ERROR)
        );
    }
};

module.exports = {authenticateJwt}
