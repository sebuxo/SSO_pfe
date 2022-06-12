const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db.js");
var jwt = require("jsonwebtoken");

const { createUser, findUser } = require("./controllers/userCTRL");
const { createToken, findToken } = require("./controllers/tokenCTRL");
const bcrypt = require("bcryptjs/dist/bcrypt");
const bcryptjs = require("bcryptjs");
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.sequelize.sync().then(() => {
  console.log("woorking");
});

app.post("/signup", async (req, res) => {
  try {
    const pwd = bcryptjs.hashSync(req.body.password, 8);
    const user = await createUser({ ...req.body, password: pwd });
    const token = jwt.sign(
      { userName: req.body.userName, email: req.body.email },
      "lghlid"
    );
    const createdT = await createToken(token, user.id);
    res.status(200).send(createdT);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.post("/login", async (req, res) => {
  const user = await findUser(req.body);
  const token = jwt.sign(
    { username: user.userName, email: req.body.email },
    "lghlid"
  );
  const createdT = await createToken(token, user.id);
  user
    ? res.status(200).json({ createdT })
    : res.status(401).json("user not found");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
