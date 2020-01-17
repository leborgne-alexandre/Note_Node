// src/api/routes/userRoutes.js
module.exports = (app) => {
    const User = require('../controllers/userController');
    const ARM = require('../middleware/accessRoleManagement');
  
    app.route('/connection/') 
    .post(User.user_login);
}
  