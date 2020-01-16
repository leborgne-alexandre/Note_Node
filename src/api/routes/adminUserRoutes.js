// src/api/routes/userRoutes.js
module.exports = (app) => {
    const userController = require('../controllers/userController');
  

    app.route('/admin/') // req.params.post_id
    .get(user.userController.sign_in);

    app.route('/admin/users/') // req.params.post_id
    .get(userController.list_all_users)
    .post(userController.create_a_user);
  
    app.route('/admin/users/:user_id')
    .get(userController.get_a_user)
    .put(userController.update_a_user)
    .delete(userController.delete_a_user);
  }
  