// src/api/routes/userRoutes.js
module.exports = (app) => {
    const userController = require('../controllers/userController');
    const ARM = require("../middleware/accessRoleManagement");
    app.post('/login', userController.user_login);

    app.route('/admin/users/') // req.params.post_id
    //.all(ARM.asAdminAccess)
    .get(userController.list_all_users)
    .post(userController.create_a_user);
  
    app.route('/admin/users/:user_id')
    .get(userController.get_a_user)
    .put(userController.update_a_user)
    .delete(userController.delete_a_user);
  }
  