// src/api/routes/sessionRoutes.js
module.exports = (app) => {
    const sessionController = require('../controller/sessionController');
  
    app.route('admin/sessions/') // req.params.post_id
    .get(sessionController.get_all_sessions)
    .post(sessionController.create_a_session);
  
    app.route('admin/users/:user_id')
    .get(sessionController.get_a_session)
    .put(sessionController.update_a_session)
    .delete(sessionController.delete_a_session);
  }
  