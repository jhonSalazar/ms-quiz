const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions.controller');
router.post("/", questionsController.addNewQuestion);
router.patch("/:id",questionsController.updateQuestion)
router.delete("/:id", questionsController.deleteQuestionById)
router.get("/", questionsController.findAllQuestions);
router.get("/:id", questionsController.findQuestionsById);

module.exports = router;
