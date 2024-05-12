import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export model('User', userSchema);

