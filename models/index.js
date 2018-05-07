const path = require('path');

// Load ORM
const Sequelize = require('sequelize');

//const url = "sqlite:quiz.sqlite";

//const sequelize = new Sequelize(url);

const sequelize = new Sequelize("sqlite:quizzes.sqlite", {logging: false});

const quiz = sequelize.import(path.join(__dirname, 'quiz'));

sequelize.sync()
    .then(() => sequelize.models.quiz.count())
.then(count => {
    if(!count){
    return sequelize.models.quiz.bulkCreate([
        {question: "Capital de Italia",  anserw: " Roma" },
        {question: "Capital de Francia",  anserw: "París"},
        {question: "Capital de España",   anserw: "Madrid"},
        {question: "Capital de Portugal", anserw: "Lisboa"}
    ]);
}
})
.catch(error => {
    console.log(error);
});

exports.quiz=quiz;
module.exports = sequelize;