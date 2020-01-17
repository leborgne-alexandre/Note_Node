// src/api/routes/moduleRoutes.js
module.exports = (app) => {
    const moduleController = require('../controllers/moduleController');
    const ARM = require("../middleware/accessRoleManagement");

    app.route('/admin/modules/') // req.params.post_id
    .all(ARM.asAdminAccess)
    .get(moduleController.get_all_modules)
    .post(moduleController.create_a_module);
  
    app.route('/admin/modules/:modules_id')
    .all(ARM.asAdminAccess)
    .get(moduleController.get_a_module) //Mean score will be displayed here
    .put(moduleController.update_a_module)
    .delete(moduleController.delete_a_module);

    app.route('/admin/modules/:modules_id/scores')
    .all(ARM.asAdminAccess)
    .get(moduleController.get_all_score);
  }
  