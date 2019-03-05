const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const md5 = require("md5");
const bcrypt = require("bcryptjs");
const sequelize = require("../config/database");

const City = sequelize.define("city", {
  DI:{
    type:Sequelize.INTEGER,
    primaryKey:true
},
Name:{
    type:Sequelize.STRING
},
CountryCode:{
    type:Sequelize.STRING
},
District:{
    type:Sequelize.STRING
},
Population:{
    type:Sequelize.INTEGER
},
});

City.prototype.compare = function(password) {
  const hash = this.password;
  return bcrypt.compareSync(password, hash);
};

module.exports = City;
