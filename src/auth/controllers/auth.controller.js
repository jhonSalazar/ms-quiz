const logger = require("../../common/winstonConfig");
const message = require("../../common/message");
const Const = require("../../common/const");
const ResponseDTO = require('../../common/responseDTO');
const userService = require("../../users/services/users.services")
const jwt = require('jsonwebtoken');
const UserDTO = require('../../common/userDTO')

const login = async (req, res, next) => {
    try {
        logger.info(`BEGIN - login body: ${JSON.stringify(req.body.email)}`);
        const {email, password} = req.body;
        const result = await userService.findByPasswordAndEmail(email, password)
        if (result) {
            logger.info('USER login succeed -->  user: ', result)
            let client = new UserDTO(result);
            jwt.sign({data: client}, 'secretKeyJwt', {expiresIn: 60 * 60}, (error, token) => {
                return res.status(200).json({
                    user: client,
                    token: token,
                    expireIn: 3600
                });
            });
        } else {
            logger.warn(message.getLogMessageGetOneNotSuccess(id));
            res.status(404).json({message: message.getMessageGetOneNotSuccess()});
        }
        logger.info(`END - Login Id: ${JSON.stringify(req.body.email)}`);
    } catch (err) {
        logger.error('An error has  occurred' + err);
        res.status(500).json(
            new ResponseDTO(
                null,
                'login unsuccessfully',
                Const.STATUS_ERROR));
    }
}

const register = async (req, res, next) => {
    try {
        logger.info(`BEGIN - register body: ${JSON.stringify(req.body.user.email)}`);
        const user = req.body.user;
        const result = await userService.addNewUser(user);
        if (result) {
            logger.info('User created successfully', user.email);
            res.status(200).json(new ResponseDTO(
                null,
                'User created successfully',
                Const.STATUS_OK)
            );
        } else {
            logger.warn('User not created');
            res.status(400).json(new ResponseDTO(
                null,
                'User no created',
                Const.STATUS_ERROR)
            );
        }
        logger.info(`END - register body: ${JSON.stringify(req.body.user.email)}`);
    } catch (err) {
        logger.error('An error has  occurred ' + err);
        res.status(500).json(
            new ResponseDTO(
                null,
                'An error has  occurred',
                Const.STATUS_ERROR));
    }
}

module.exports = {login, register}
