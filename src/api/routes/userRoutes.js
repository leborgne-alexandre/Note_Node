// src/api/routes/userRoutes.js
module.exports = (app) => {
    const userControleur = require('../controleur/userControleur');
  
    app.route('/users/') // req.params.post_id
    .get(userControleur.get_all_users)
    .post(userControleur.create_an_user);
  
    app.route('/users/:user_id')
    .get(userControleur.get_an_user)
    .put(userControleur.update_an_user)
    .delete(userControleur.delete_an_user);
  }
  