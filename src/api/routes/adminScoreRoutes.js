// src/api/routes/userRoutes.js
module.exports = (app) => {
    const scoreController = require('../controllers/scoreController');
    const userController = require('../controllers/userController');
    const moduleController = require('../controllers/moduleController');

    app.route('admin/scores/') // req.params.post_id
    .get(scoreController.list_all_scores);

    app.route('admin/scores/:module_id') // req.params.post_id
    .get(moduleController.get_a_module);

    app.route('admin/scores/:user_id') // req.params.post_id
    .get(userController.get_an_user);

    app.route('admin/scores/:score_id') // req.params.post_id
    .get(scoreController.get_a_score);
  }
  