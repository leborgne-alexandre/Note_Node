// src/api/routes/userRoutes.js
module.exports = (app) => {
    const scoreController = require('../controllers/scoreController');
    const userController = require('../controllers/userController');
    const moduleController = require('../controllers/moduleController');

    app.route('admin/score/:module') // req.params.post_id
    .get(moduleController.get_a_module);

    app.route('admin/score/:user') // req.params.post_id
    .get(scoreContruserControlleroller.get_an_user);

    app.route('admin/score/:score') // req.params.post_id
    .get(scoreController.get_a_score);
  }
  