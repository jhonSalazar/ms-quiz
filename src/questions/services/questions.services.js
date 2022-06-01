const questionDao = require('../daos/questions.dao')

const findAllQuestions = (limit, page) => questionDao.findAllQuestions()
const findQuestionsById = (bid) => questionDao.findQuestionsById(bid)
const deleteQuestionById = (bid) => questionDao.deleteQuestionById(bid)
const addNewQuestion = (newQuestion) => questionDao.addNewQuestion(newQuestion)
const updateQuestion = (bid, updatedQuestion) => questionDao.updateQuestion(bid, updatedQuestion);

module.exports = {
    findAllQuestions,
    findQuestionsById,
    deleteQuestionById,
    addNewQuestion,
    updateQuestion
}
