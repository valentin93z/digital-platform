import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    username: {
        type: String,
        unique: [true, 'Пользователь с таким username уже существует'],
        required: [true, 'Поле username - обязательное'],
    },
    password: {
        type: String,
        required: [true, 'Поле password - обязательное'],
    },
    role: {
        type: String,
        required: [true, 'Поле role - обязательное'],
    },
    position: {
        type: String,
        required: [true, 'Поле position - обязательное'],
    },
    firstname: {
        type: String,
        required: [true, 'Поле firstname - обязательное'],
    },
    lastname: {
        type: String,
        required: [true, 'Поле lastname - обязательное'],
    },
    middlename: {
        type: String,
        required: [true, 'Поле middlename - обязательное'],
    },
    email: {
        type: String,
        unique: [true, 'Пользователь с таким email уже существует'],
        required: [true, 'Поле email - обязательное'],
    },
    phone: {
        type: String,
        unique: [true, 'Пользователь с таким phone уже существует'],
        required: [true, 'Поле phone - обязательное'],
    },
    birthday: {
        type: String,
        required: [true, 'Поле birthday - обязательное'],
    },
    courses: {
        assigned: {
            type: Array,
        },
        completed: {
            type: Array,
        },
    },
    tests: {
        assigned: {
            type: Array,
        },
        completed: {
            type: Array,
        },
    },
    polls: {
        assigned: {
            type: Array,
        },
        completed: {
            type: Array,
        },
    },
    motivation: {
        balance: {
            type: Number,
        },
        awards: {
            type: Array,
        },
    },
    image: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        },
        url: {
            type: String,
        },
    },
});

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch(error) {
        throw error;
    }
});

UserSchema.methods.comparePassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch(error) {
        throw error; 
    }
}

const User = models.User || model('User', UserSchema);
export default User;