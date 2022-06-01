const questionService = require('../services/questions.services')
const logger = require("../../common/winstonConfig");
const message = require("../../common/message");
const Const = require("../../common/const");
const ResponseDTO = require('../../common/responseDTO');
const mapper = require("../../common/mapper");

const findQuestionsById = async (req, res, next) => {
    try {
        logger.info(`BEGIN - getOne Id: ${JSON.stringify( req.params.id)}`);
        const id = req.params.id;
        const result = await  questionService.findQuestionsById(id)
        const questionsDTO = mapper.questionModelTOQuestionDTO(result);
        if (questionsDTO) {
            logger.info(message.getLogMessageGetOneSuccess(questionsDTO));
            res.status(200).json(new ResponseDTO(
                questionsDTO,
                message.getMessageGetOneSuccess(),
                Const.STATUS_OK)
            );
        } else {
            logger.warn(message.getLogMessageGetOneNotSuccess(id));
            res.status(404).json({message: message.getMessageGetOneNotSuccess()});
        }
        logger.info(`END - getOne Id: ${JSON.stringify( req.params.id)}`);
    } catch (err) {
        logger.error(message.getLogMessageCreateError(req.body) + err);
        res.status(500).json(
            new ResponseDTO(
                null,
                message.getMessageGetOneNotSuccess(),
                Const.STATUS_ERROR));
    }
}

const deleteQuestionById = async (req, res, next) => {
    try {
        logger.info(`BEGIN - remove Id: ${JSON.stringify(req.params.id)}`);
        const id = req.params.id;
        const result = await questionService.deleteQuestionById(id);
        if (result) {
            logger.info(message.getLogMessageRemovedSuccess(id));
            res.status(200).json(new ResponseDTO(
                null,
                message.getMessageRemoveSuccess(),
                Const.STATUS_OK)
            );
        } else {
            logger.warn(message.getLogMessageRemoveNotSuccess(id));
            res.status(400).json({message: message.getMessageRemoveNoSuccess()});
        }
        logger.info(`END - remove Id: ${JSON.stringify(req.params.id)}`);
    } catch (err) {
        logger.error(message.getLogMessageCreateError(req.body) + err);
        res.status(500).json(
            new ResponseDTO(
                null,
                message.getMessageCreateNotSuccess(),
                Const.STATUS_ERROR));
    }
}

const addNewQuestion = async (req, res, next) => {
    try {
        logger.info(`BEGIN - create  body: ${JSON.stringify(req.body)}`);
        const newQuestion = req.body;
        const result = await questionService.addNewQuestion(newQuestion);
        if (result) {
            logger.info(message.getLogMessageCreateSuccess(result));
            res.status(200).json(new ResponseDTO(
                null,
                message.getMessageCreateSuccess(),
                Const.STATUS_OK)
            );
        } else {
            logger.error(message.getLogMessageCreateError(newQuestion));
            res.status(400).json({message: message.getMessageCreateNotSuccess()});
        }
        logger.info(`END - create  body: ${JSON.stringify(req.body)}`);
    } catch (err) {
        logger.error(message.getLogMessageCreateError(req.body) + err);
        res.status(500).json(
            new ResponseDTO(
                null,
                message.getMessageCreateNotSuccess(),
                Const.STATUS_ERROR));
    }
}


const findAllQuestions = async (req, res, next) => {
    try {
        logger.info(`BEGIN - getAll`);
        const clinic = req.query.clinic;
        let limit = req.query.limit;
        let page = req.query.page;
        limit = parseInt(limit);
        page = parseInt(page);
        page = limit * page;

        const result = await questionService.findAllQuestions(limit, page);
        const resultDTO = await mapper.questionsModelTOQuestionDTO(result);
        //await appointmentService.getAll(clinic,limit,page);
        if (resultDTO) {
            logger.info(message.getLogMessageGetAllSuccess(resultDTO));
            res.status(200).json(new ResponseDTO(
                resultDTO,
                message.getMessageGetOneSuccess(),
                Const.STATUS_OK)
            );
        } else {
            logger.warn(message.getLogMessageGetAllNoSuccess());
            res.status(404).json({message: message.getLogMessageGetAllNoSuccess()});
        }
        logger.info(`END - getAll`);
    } catch (err) {
        logger.error(message.getLogMessageCreateError(req.body) + err);
        res.status(500).json(
            new ResponseDTO(
                null,
                message.getMessageCreateNotSuccess(),
                Const.STATUS_ERROR));
    }
}

const updateQuestion = async (req, res, next) => {
    try {
        logger.info(`BEGIN - update  Id: ${JSON.stringify(req.params.id)} Body: ${JSON.stringify(req.body)}`);
        const id = req.params.id;
        const updatedQuestion = req.body;
        const result = await questionService.updateQuestion(id, updatedQuestion);
        if (result) {
            logger.info(message.getLogMessageUpdateSuccess(id, result));
            res.status(200).json(new ResponseDTO(
                null,
                message.getMessageUpdateSuccess(),
                Const.STATUS_OK));
        } else {
            logger.info(message.getLogMessageUpdateNotSuccess(id, updatedQuestion));
            res.status(400).json({message: message.getMessageUpdateNotSuccess()});
        }
        logger.info(`END - update  Id: ${JSON.stringify(req.params.id)} Body: ${JSON.stringify(req.body)}`);
    } catch (err) {
        logger.error(message.getLogMessageCreateError(req.body) + err);
        res.status(500).json(
            new ResponseDTO(
                null,
                message.getMessageCreateNotSuccess(),
                Const.STATUS_ERROR));
    }
}

module.exports = {
    findAllQuestions,
    findQuestionsById,
    deleteQuestionById,
    addNewQuestion,
    updateQuestion
}
