/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function (req, res) {
    res.view();
  },

  create: function (req, res, next) {
    Post.create( req.params.all(), function postCreated(err, post) {
      if (err) return next(err);

      //image upload
      var image_name = req.file('image_name');
      console.log(image_name);
      //	Files will be uploaded to .tmp/uploads
        if (err) return res.serverError(err);
        //	IF ERROR Return and send 500 error with error
      console.log(files);
      res.json({ status: 200, file: files });
      // end upload

      res.redirect('/post/show/' + post.id);
    });
  },

  show: function (req, res, next) {
    Post.findOne( req.param('id'), function foundPost(err, post) {
      if (err) return next(err);
      if (!post) return next();
      res.view({
        post: post
      });
    });
  },

  index: function (req, res, next) {
    Post.find( function foundPost(err, post) {
      if (err) return next(err);

      res.view({
        post: post
      });
    });
  },






};

