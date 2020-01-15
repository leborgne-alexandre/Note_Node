// src/api/routes/moduleRoutes.js
module.exports = (app) => {
    const moduleControleur = require('../controleur/moduleControleur');
  
    app.route('/modules/') // req.params.post_id
    .get(commentControleur.get_all_modules)
    .post(commentControleur.create_a_module);
  
    app.route('/modules/:modules_id')
    .get(commentControleur.get_a_module)
    .put(commentControleur.update_a_module)
    .delete(commentControleur.delete_a_module);
  }
  