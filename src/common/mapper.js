const QuestionsDTO = require("./questionsDTO");
const questionnaireDTO = require("./questionnaireDTO");

const questionsModelTOQuestionDTO = async (model) =>{
    return Promise.all(model.map((questionnaireSchema) => questionModelTOQuestionDTO(questionnaireSchema)));
}

const questionModelTOQuestionDTO = (questionsSchema) =>{
    return  new questionnaireDTO(questionsSchema);
}
module.exports = { questionsModelTOQuestionDTO, questionModelTOQuestionDTO }
