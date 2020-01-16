// src/api/routes/userRoutes.js
module.exports = (app) => {
    const scoreController = require('../controller/scoreController');
  
    app.route('admin/score/:module') // req.params.post_id
    .get(scoreController.get_all_modules)
    .get(scoreController.get_a_module)
    .get(scoreController.get_all_users)
    .get(scoreController.get_an_user)
    .get(scoreController.get_a_score);
  }
  