var questions = require('../controllers/questions.js');

module.exports = function(app) {
    app.post("/questions", questions.ask); 
};
