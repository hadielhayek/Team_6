const Feedback = require('../Models/feedbackSchema')

class Controller {
  getAll(req, res, next) {
    Feedback.find((err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
    })
}

get(req, res, next) {
    let { id } = req.params;
    Feedback.findOne({ _id: id }, (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
    });
}

post(req, res, next) {
  let body = req.body;
  let doc = new Feedback(body);
  doc.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
  });
}

put(req, res, next) {
  let { id } = req.params;
  let body = req.body;
  Feedback.updateOne({ _id: id }, {
      $set: body
  }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
  });
}

delete(req, res, next) {
let { id } = req.params;
Feedback.findByIdAndDelete({ _id: id }, (err, response) => {
    if (err) return next(err);
    res.status(200).send({ success: true, response });
})
}

}

const feedbackController = new Controller();
module.exports = feedbackController;