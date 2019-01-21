import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName :{
        type: String,
        required: 'Enter a first name'
    },
    lastName:{
        type: String,
        required: 'Enter a last name'
    },
    email:{
         type: String,        
    },
    password:{
        type:String
    },
    createed_data:{
        type: Date,
        default: Date.now
    }
});
