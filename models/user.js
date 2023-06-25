import { Schema, model, models } from "mongoose";

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
    image: {
        type: String,
    },
});

const User = models.User || model('User', UserSchema);
export default User;