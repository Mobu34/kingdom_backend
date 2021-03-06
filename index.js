const app = require("express")();
const formidable = require("express-formidable");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(formidable());

const itemsRoute = require("./routes/item");
app.use(itemsRoute);

mongoose.connect(process.env.MONGODB_URI_LOCAL, {
  useUnifiedTopology: true,
  useNewUrlParser: false,
});

app.all("*", (req, res) => {
  return res.status(404).json({ error: "Page Not Found" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server has started on port ${process.env.PORT}`);
});
