
const config = {
    database: {
        mongo: {
            connectionString: process.env.MONGO_CONNECTION_STRING,
            options: {
                useNewUrlParser: true,
                socketTimeoutMS: 480000,
                keepAlive: true,
                connectTimeoutMS: 30000,
            }
        }
    },
    middleware: {
        questions:{
            validator: {
                QUESTION_IS_EMPTY: { code: 101, description: "Questions cant be empty" },
                QUESTION_ANSWERS_IS_EMPTY: { code: 102, description: "Answers cant be empty" },
                QUESTIONS_CORRECT_IS_EMPTY: { code: 103, description: "Correct end cant be empty" }
            }
        },
        users:{
            validator: {
                QUESTION_IS_EMPTY: { code: 101, description: "Questions cant be empty" },
                QUESTION_ANSWERS_IS_EMPTY: { code: 102, description: "Answers cant be empty" },
                QUESTIONS_CORRECT_IS_EMPTY: { code: 103, description: "Correct end cant be empty" }
            }
        },
        auth: {
            validator: {
                QUESTION_IS_EMPTY: { code: 101, description: "Questions cant be empty" },
                QUESTION_ANSWERS_IS_EMPTY: { code: 102, description: "Answers cant be empty" },
                QUESTIONS_CORRECT_IS_EMPTY: { code: 103, description: "Correct end cant be empty" }
            }
        }

    }
}

module.exports = config;
