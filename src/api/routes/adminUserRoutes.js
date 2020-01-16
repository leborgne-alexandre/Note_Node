// src/api/routes/userRoutes.js
module.exports = (app) => {
    const userController = require('../controllers/userController');
  
    app.route('/admin/users/') // req.params.post_id
    .get(userController.get_all_users)
    .post(userController.create_an_user);
  
    app.route('/admin/users/:user_id')
    .get(userController.get_an_user)
    .put(userController.update_an_user)
    .delete(userController.delete_an_user);
  }
  