const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/students.routes"));

mongoose
  .connect(
    "mongodb+srv://Magomed:2403kma@cluster0.96gehwd.mongodb.net/students?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

// mongoose.connect(
//   "mongodb+srv://Magomed:2403kma@cluster0.96gehwd.mongodb.net/students?retryWrites=true&w=majority",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Ошибка при соединении с сервером MongoDB");
//     }
//   }
// );

const port = 4000;

app.listen(port, (err) => {
  if (err) {
    console.log("произошла ошибка");
  } else {
    console.log("Сервер работает");
  }
});
