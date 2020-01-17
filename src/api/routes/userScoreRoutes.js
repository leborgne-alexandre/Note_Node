// src/api/routes/userRoutes.js
module.exports = (app) => {
    const userController = require('../controllers/userController');
    const scoreController = require('../controllers/scoreController');
    const moduleController = require('../controllers/moduleController');
  
    app.route('score/:module') 
    .get(userController.get_all_modules)
    .get(userController.get_a_module)

    app.route('score/:module?filtre=:session') 
    .post(scoreController.set_a_score);

    app.route('/psswd') 
    .put(userController.update_password) 
}
  