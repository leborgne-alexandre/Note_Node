// src/api/routes/userRoutes.js
module.exports = (app) => {
    const userControleur = require('../controllers/userController');
  
    app.route('/users/') // req.params.post_id
    .get(userControleur.list_all_users)
    .post(userControleur.create_a_user);
  
    app.route('/users/:user_id')
    .get(userControleur.get_a_user)
    .put(userControleur.update_a_user)
    .delete(userControleur.delete_a_user);
  }
  