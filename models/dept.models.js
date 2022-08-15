
module.exports=(sequelize,Sequelize)=>{
   const model=sequelize.define('dept',{
    ID:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    DeptName:{
        type:Sequelize.STRING(150),
        allowNull:false
    },
   },{
    freezeTableName:true,
    timestamp:false
   })

   return model;

}