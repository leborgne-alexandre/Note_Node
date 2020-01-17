// src/api/routes/sessionRoutes.js
module.exports = (app) => {
    const sessionController = require('../controllers/sessionController');
  
    app.route('/admin/sessions/') // req.params.session_Id
    .get(sessionController.get_all_sessions)
    .post(sessionController.create_a_session);
  
    app.route('/admin/users/:session_id')
    .get(sessionController.get_a_session)
    .put(sessionController.update_a_session)
    .delete(sessionController.delete_a_session);
  }
  