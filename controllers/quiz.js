
const Sequelize = require("sequelize");
const {models} = require("../models");


/
// Autoload the quiz with id equals to :quizId
exports.load = (req, res, next, quizId) => {

    models.quiz.findById(quizId)
        .then(quiz => {
        if (quiz) {
            req.quiz = quiz;
            next();
        } else {
            throw new Error('There is no quiz with id=' + quizId);
}
})
.catch(error => next(error));
};


// GET /quizzes
exports.index = (req, res, next) => {
models.Quiz.findAll()
    .then(quizzes => {
        res.render('quizzes.ejs', {quizzes})
})
    .catch(error => next(error));
};