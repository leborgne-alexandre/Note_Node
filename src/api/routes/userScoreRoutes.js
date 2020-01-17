// src/api/routes/userRoutes.js
module.exports = (app) => {
    const userController = require('../controllers/userController');
    const scoreController = require('../controllers/scoreController');
    const moduleController = require('../controllers/moduleController');
    const ARM = require('../middleware/accessRoleManagement');
  
    app.route('/score/:module_id') 
    .all(ARM.canMakeAVote)
    .post(scoreController.create_a_score);

    app.route('/score/:module_id') 
    .all(ARM.verify_token)
    .get(moduleController.get_a_module);

    app.route('/psswd') 
    .put(userController.update_password);
}
  