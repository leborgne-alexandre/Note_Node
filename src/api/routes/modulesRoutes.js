// src/api/routes/moduleRoutes.js
module.exports = (app) => {
    const moduleControleur = require('../controleur/moduleControleur');
  
    app.route('/modules/') // req.params.post_id
    .get(moduleControleur.get_all_modules)
    .post(moduleControleur.create_a_module);
  
    app.route('/modules/:modules_id')
    .get(moduleControleur.get_a_module)
    .put(moduleControleur.update_a_module)
    .delete(moduleControleur.delete_a_module);
  }
  