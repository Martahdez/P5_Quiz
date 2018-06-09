const Sequelize = require("sequelize");
const {models} = require("../models");

//adaptar load
//Este metodo devuelve el quiz
exports.load = (req,res,next,quizId) => {
    models.quiz.findById(quizId) //Busca entre los quizzes el quiz que tenga ese id
        .then(quiz => { //El metodo findById devuelve -1 si no lo encuentra o que
            if(quiz) { //Si es positivo
                req.quiz = quiz; //asocia la respuesta el quiz
                next(); //Pasa al siguiente 
            } else { //Si no se ha encontrado, negativo
                throw new Error('There es no quiz with id='+ quizId); //lanza una excepcion
        }
    })
    .catch(error => next(error)); //Coge el error
};

// GET QUIZZES 
//Muestra todos los quizzes
exports.index = (req, res, next)=> {
    //findAll
    models.quiz.findAll() //coge los quizzes y crea pag html con la vista indicada
        .then(quizzes => {
            res.render('quizzes.ejs', {quizzes})
        })
        .catch(error => next(error));
};
