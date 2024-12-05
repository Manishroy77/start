const mongoose = require('mongoose');

const newPerson = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type : Number,
        required: true
    },
    work: {
        type : String,
        required: true,
        enum : ["chef","manager","waiter"]
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type : String,
        unique: true,
        required: true
    },
    address: {
        type : String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const person = mongoose.model('person',newPerson);

module.exports = person;