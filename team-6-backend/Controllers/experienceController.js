const Experience = require('../Models/experienceSchema')

class Controller {
  getAll(req, res, next) {
    Experience.find((err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
    })
}

get(req, res, next) {
    let { id } = req.params;
    Experience.findOne({ _id: id }, (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
    });
}

post(req, res, next) {
  let body = req.body;
  let doc = new Experience(body);
  doc.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
  });
}

put(req, res, next) {
  let { id } = req.params;
  let body = req.body;
  Experience.updateOne({ _id: id }, {
      $set: body
  }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
  });
}

delete(req, res, next) {
let { id } = req.params;
Experience.findByIdAndDelete({ _id: id }, (err, response) => {
    if (err) return next(err);
    res.status(200).send({ success: true, response });
})
}

}

const ExperienceController = new Controller();
module.exports = ExperienceController;