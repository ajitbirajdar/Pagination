
module.exports=(sequelize,Sequelize)=>{
   const model=sequelize.define('users',{
    ID:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Name:{
        type:Sequelize.STRING(150),
        allowNull:false
    },
    Mobile:{
        type:Sequelize.STRING(12),
        allowNull:false
    }
   },{
    freezeTableName:true,
    timestamp:false
   })

   return model;

}