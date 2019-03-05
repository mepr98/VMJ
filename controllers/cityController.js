const sequelize = require("../config/database");
const City = require("../models/User");

exports.verciudades = (req,res)=>{
    City.findAll().then(city=>{
        res.render('user',{city       })
    })
    .catch(err => console.log('ERROR in city ' + err));
}

exports.agregar =(req,res)=>{
   res.render('add');
}
exports.agregarciudades =(req,res)=>{
     let{Name,DI,CountryCode,District,Population}=req.body;
    let error= [] ;
    if(!DI){
        error.push({text:'por favor agrega un ID'});
    }
    if(!Name){
        error.push({text:'por favor agrega un Nombre'});
    }
    if(!CountryCode){
        error.push({text:'por favor agrega un codigo para la ciudad '});
    }
    if(!District){
        error.push({text:'por favor agrega un Distrito'});
    }
    if(!Population){
        error.push({text:'por favor agrega la poblacion'});
    }

    if(error.length > 0){
 res.render('add',{
     error,
     Name,
     DI,
     District,
     CountryCode,     
     Population,
 }
 );
    }else{

        City.create({
            DI,
            Name,
            CountryCode,
            District,
            Population,
        })
        .then(City=>res.redirect('/user'))
        .catch(err=>console.log(err));
    }

}