const Sequelize = require("sequelize");
const {models} = require("../models");

//adaptar load
exports.load = (req,res,next,quizId) => {
    models.quiz.findById(quizId)
        .then(quiz => {
            if(quiz) {
                req.quiz = quiz;
                next();
            } else {
                throw new Error('There es no quiz with id='+ quizId);
        }
    })
    .catch(error => next(error));
};

// GET QUIZZES
exports.index = (req, res, next)=> {
    //findAll
    models.quiz.findAll()
        .then(quizzes => {
            res.render('quizzes.ejs', {quizzes})
        })
        .catch(error => next(error));
};