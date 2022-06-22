const bcryptjs = require("bcryptjs");
const bcrypt = require("bcryptjs/dist/bcrypt");
const { tutorials } = require("../db");
const db = require("../db");
const user = db.user;
const Op = db.Sequelize.Op;

exports.findUser = async (body) => {
  const userFound = await user.findOne({ where: { email: body.email } });
  console.log(userFound);
  const passwordIsValid = bcrypt.compareSync(body.password, userFound.password);
  return passwordIsValid ? userFound : null;
};

exports.createUser = async (body) => {
  const ghlid = await user.findOne({ where: { email: body.email } });
  console.log("returned", ghlid);
  if (ghlid) {
    throw new Error("Email already exists");
  } else {
    return user.create(body);
  }
};
