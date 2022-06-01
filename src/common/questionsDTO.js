const {Schema} = require("mongoose");

class QuestionsDTO {
    constructor(model){
        this.title = model.title;
        this.id = model._id;
        this.answers = model.answers;
        this.correct = model.correct;
    }
}
module.exports= QuestionsDTO;

/*
const questionsSchema = new Schema({
        answers: {
            required: true,
            type: [String],
            validate: {
                validator: function (v) {
                    console.log('entra aca', v);
                    if (v.length > 10) return false;
                    if (v.length < 2) return false;
                },
                message: 'you must have less than 10 options or you must have at least 2 options'
            }
        },
        correct: {
            required: true,
            type: String,
            minlength: 1,
            maxlength: 9
        }
    }
)*/
