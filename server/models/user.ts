import mongoose from 'mongoose';

class User{

    standUpSchema = new mongoose.Schema({
        fName: { type: String},
        lName: { type: String },
        email: { type: String },
        password: { type: String },
        createdOn: { type: Date, default: Date.now }
    })

    constructor(){
        
    }
}

export default User;