const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const questionsSchema = new Schema({
    title: {type: String, required: true},
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
)
const questionnaireSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    questions:[questionsSchema]
});
module.exports = mongoose.model('Questionnaire', questionnaireSchema);
