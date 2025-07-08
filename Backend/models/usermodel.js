const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullname:{
      firstname:{
        type: String,
        required: true,
        minlength:[3, 'First name must be at least 3 characters long'],
      },
      
      lastname:{
         minlength:[3, 'First name must be at least 3 characters long'],
      },
      
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength:[5, 'First name must be at least 5 characters long'],
      },

      password :{
        type: String,
        required:true,
      },

      socketId:{
        type:String,
      },
})