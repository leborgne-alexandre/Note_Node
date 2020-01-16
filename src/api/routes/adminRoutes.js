// src/api/routes/moduleRoutes.js
module.exports = (app) => {
    const moduleController = require('../controller/moduleController');
  
    app.route('/admin-index/') // req.params.post_id
    .get(moduleController.get_options) // Get the buttons for user, module and session
  }
  