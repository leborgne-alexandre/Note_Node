// src/api/routes/sessionRoutes.js
module.exports = (app) => {
    const sessionControleur = require('../controleur/sessionControleur');
  
    app.route('admin/sessions/') // req.params.post_id
    .get(sessionControleur.get_all_sessions)
    .post(sessionControleur.create_a_session);
  
    app.route('admin/users/:user_id')
    .get(sessionControleur.get_a_session)
    .put(sessionControleur.update_a_session)
    .delete(sessionControleur.delete_a_session);
  }
  