// src/api/routes/commentRoutes.js
module.exports = (app) => {
    const commentControleur = require('../controleur/commentControleur');
  
    app.route('/posts/:post_id/comments') // req.params.post_id
    .get(commentControleur.get_all_comments)
    .post(commentControleur.create_a_comment);
  
    app.route('/comments/:comment_id')
    .get(commentControleur.get_a_comment)
    .put(commentControleur.update_a_comment)
    .delete(commentControleur.delete_a_comment);
  }
  