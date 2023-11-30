import { connectToDB } from "@utils/database";
import User from "@models/user";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const userItem = await User.findById(params.id);
        if (!userItem) return new Response(JSON.stringify('User Item not found'), { status: 404 });
        return new Response(JSON.stringify(userItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to fetch User Item', { status: 500 }));
    }
}

export const PATCH = async (request, { params }) => {
    const { username, password, role, position, direction, sector, store, firstname, lastname, middlename, email, phone, birthday, courses, tests, polls, motivation, image } = await request.json();
    try {
        await connectToDB();
        const existingItem = await User.findById(params.id);
        username && (existingItem.username = username);
        role && (existingItem.role = role);
        position && (existingItem.position = position);
        direction && (existingItem.direction = direction);
        sector && (existingItem.sector = sector);
        store && (existingItem.store = store);
        firstname && (existingItem.firstname = firstname);
        lastname && (existingItem.lastname = lastname);
        middlename && (existingItem.middlename = middlename);
        email && (existingItem.email = email);
        phone && (existingItem.phone = phone);
        birthday && (existingItem.birthday = birthday);
        courses && (existingItem.courses = courses);
        tests && (existingItem.tests = tests);
        polls && (existingItem.polls = polls);
        motivation && (existingItem.motivation = motivation);
        image && (existingItem.image = image);
        await existingItem.save();
        return new Response(JSON.stringify(existingItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to update User Item', { status: 500 }));
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        await User.findByIdAndRemove(params.id);
        return new Response(JSON.stringify('User Item deleted successully', { status: 200 }));
    } catch (error) {
        return new Response(JSON.stringify('Failed to delete User Item', { status: 500 }));
    }
}