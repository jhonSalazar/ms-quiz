const QuestionsDTO = require('./questionsDTO')
class QuestionnaireDTO {
    constructor(model){
        this.id = model._id;
        this.title = model.title;
        this.questions = model.questions.map(q => new QuestionsDTO(q));
    }
}
module.exports= QuestionnaireDTO;
