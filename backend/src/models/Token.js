const Tutorial = require("./User");

module.exports = (sequelize, Sequelize) => {
  const TokenSSO = sequelize.define("tokenSSO", {
    token: {
      type: Sequelize.STRING,
    },
  });
  return TokenSSO;
};
