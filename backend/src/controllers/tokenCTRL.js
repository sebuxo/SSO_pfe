const db = require("../db");
const Token = db.token;
const Op = db.Sequelize.Op;

exports.createToken = (token, userId) => {
  return Token.create({ token, userId });
};

// Find a single Token with an id
exports.findToken = (token) => {
  return Token.findOne({ where: { token } });
};
