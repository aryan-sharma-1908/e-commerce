const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Full Name is a required field"],
        trim: true,
        maxlength: 50
        
    },
    email: {
        type: String,
        required: [true, "Email is a required field"],
        unique: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: [true, "Password is a required field"],
        minlength: 8,
        maxlength: 1024
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

userSchema.pre('save', async function(next) {
    const user = this;
    if(!user.isModified('password')) return next();
    
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        next();
    } catch(error) {
        console.error("Error hashing password:", error);
        next(error);
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;