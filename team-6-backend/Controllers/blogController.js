const Blog = require('../Models/blogSchema')

class Controller {
    //get All Blogs
    getAll(req, res, next) {
        Blog.find((err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        })
    }
  //get Blog by Id
    get(req, res, next) {
        let { id } = req.params;
        Blog.findOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        });
    }
  //Add a blog
    post(req, res, next) {
      let body = req.body;
      let doc = new Blog(body);
      doc.save((err, response) => {
          if (err) return next(err);
          res.status(200).send({ success: true, response });
      });
  }
  //update a blog
  put(req, res, next) {
      let { id } = req.params;
      let body = req.body;
      Blog.updateOne({ _id: id }, {
          $set: body
      }, (err, response) => {
          if (err) return next(err);
          res.status(200).send({ success: true, response });
      });
  }
  //delete a blog
  delete(req, res, next) {
    let { id } = req.params;
    Blog.findByIdAndDelete({ _id: id }, (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
    })
  }
}

const blogcontroller = new Controller();
module.exports = blogcontroller;