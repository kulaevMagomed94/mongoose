const Student = require("../model/Student.model");

module.exports.studentsController = {
  getStudents: (req, res) => {
    Student.find().then((data) => {
      res.json(data);
    });
  },
  // createStudents: (req, res) => {
  //   Student.create({
  //     name: req.body.name,
  //     phone: req.body.phone,
  //     age: req.body.age,
  //   }).then(() => {
  //     res.json("Студент добавлен");
  //   });
  // },
  //или так
  createStudents: (req, res) => {
    const { name, phone, age } = req.body;
    Student.create({
      name,
      phone,
      age,
    }).then(() => {
      res.json("Студент добавлен");
    });
  },
  deleteStudents: (req, res) => {
    Student.findByIdAndRemove(req.params.id).then((data) => {
      res.json(data);
    });
  },
  changeStudents: (req, res) => {
    Student.findByIdAndUpdate(req.body.id, { name: `${req.body.name}` }).then(
      (data) => {
        res.json(data);
      }
    );
  },
};
