const questionModel = require('../models/questions.model')

const findAllQuestions = () => questionModel.find();
const findQuestionsById = (bid) => questionModel.findById(bid);
const deleteQuestionById = (bid) => questionModel.deleteOne({_id: bid});
const addNewQuestion = (newQuestion) => questionModel.create(newQuestion);
const updateQuestion = (bid, updatedQuestion) => questionModel.updateOne({_id: bid}, {$set: updatedQuestion});

module.exports = {
    findAllQuestions,
    findQuestionsById,
    deleteQuestionById,
    addNewQuestion,
    updateQuestion
}
