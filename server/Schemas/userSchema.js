const mongoose = require('mongoose');

const user = mongoose.schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    sessions: {type: String, default: ''},
    joinDate: {type: Date, default: Date.now},
    // posts: [],
});

const User = mongoose.model('User', user);