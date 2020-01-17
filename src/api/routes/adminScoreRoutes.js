// src/api/routes/userRoutes.js
module.exports = (app) => {
    const scoreController = require('../controllers/scoreController');
    const userController = require('../controllers/userController');
    const moduleController = require('../controllers/moduleController');

    app.route('admin/score/:module') // req.params.post_id
    .get(moduleController.get_all_modules)
    .get(moduleController.get_a_module)
    .get(userController.get_all_users)
    .get(scoreContruserControlleroller.get_an_user)
    .get(scoreController.list_all_scores);
    .get(scoreController.get_a_score);
  }
  