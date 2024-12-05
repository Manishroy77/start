const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/HOTELMINE';
mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('database server connected')
});

module.exports = db;