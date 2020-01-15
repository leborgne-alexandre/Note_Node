// src/api/routes/userRoutes.js
module.exports = (app) => {
    const scoreControleur = require('../controleur/scoreControleur');
  
    app.route('/score/:module?filtre=:session') // req.params.post_id
    .get(scoreControleur.get_all_modules)
    .post(scoreControleur.set_a_score);
  }
  