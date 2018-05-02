const path = require('path');

const Sequelize = require('sequelize');

const url = "sqlite:quiz.sqlite";

const sequelize = new Sequelize(url);

// Import the definition of the Quiz Table from quiz.js
const Quiz = sequelize.import(path.join(__dirname, 'quiz'));

sequelize.sync()
    .then(() => sequelize.models.Quiz.count())
.then(count => {
    if(!count){
    return sequelize.models.Quiz.bulkCreate([
        {question: "Capital de Italia",  anserw: " Roma" },
        {question: "Capital de Francia",  anserw: "París"},
        {question: "Capital de España",   anserw: "Madrid"},
        {question: "Capital de Portugal", anserw: "Lisboa"}
    ]);
}
})
.then(() => console.log('La base de datos ha sido creada'))
.catch(error => {
    console.log("Error creando la base de datos:", error);
    process.exit(1);
});

module.exports = sequelize;