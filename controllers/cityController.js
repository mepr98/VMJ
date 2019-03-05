const sequelize = require("../config/database");
const City = require("../models/User");

exports.verciudades = (req,res)=>{
    City.findAll().then(city=>{
        res.render('user',{city       })
    })
    .catch(err => console.log('ERROR in city ' + err));
}