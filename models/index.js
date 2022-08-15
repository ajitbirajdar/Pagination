const { Sequelize } = require('sequelize');

const sequelize=new Sequelize('seqdemo2','root','',{
    host: 'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('connected with DB');
}).catch(err=>{
    console.log(err.message);
})

const db={};

db.users=require('./users.models')(sequelize,Sequelize);
db.dept=require('./dept.models')(sequelize,Sequelize);

db.dept.hasMany(db.users);
db.users.belongsTo(db.dept);

db.Sequelize=Sequelize;
db.sequelize=sequelize;



module.exports=db;



