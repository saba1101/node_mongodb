const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRouter = require("./routes/productRouter");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

const config = {
  port: 2000,
  uri: "mongodb+srv://sabakhara44:test1234@cluster0.qg2jqeq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0",
};

app.get("/", (req, res) => {
  res.send("Root Connection");
});

app.use("/product", productRouter);

mongoose.set("strictQuery", false);
mongoose
  .connect(config.uri)
  .then((response) => {
    console.log("Connected to mongoDB");
    app.listen(config.port, () => {
      console.log(`server is running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
