// src/api/routes/userRoutes.js
module.exports = (app) => {
    const scoreController = require('../controllers/scoreController');
    const userController = require('../controllers/userController');
    const moduleController = require('../controllers/modelController');
    const ARM = require('../middleware/accessRoleManagement');
    app.route('/score/:module_id') 
    .all(ARM.canMakeAVote)
    .get(moduleController.get_a_module)
    .post(scoreController.create_a_score);

    app.route('/user/:id_user/psswd') 
    .put(userController.update_password) 
}
  