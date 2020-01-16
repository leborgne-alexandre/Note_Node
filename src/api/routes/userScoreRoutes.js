// src/api/routes/userRoutes.js
module.exports = (app) => {
    const scoreController = require('../controllers/scoreController');
  
    app.route('/score/:module') // req.params.post_id
    .get(scoreController.get_all_modules)
    .get(scoreController.get_a_module)

    app.route('/score/:module?filtre=:session') // req.params.post_id
    .post(scoresController.set_a_score);
  }
  