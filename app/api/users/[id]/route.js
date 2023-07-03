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
    const { username, role, firstname, lastname, middlename, email, phone, birthday, image } = await request.json();
    try {
        await connectToDB();
        const existingItem = await User.findById(params.id);
        existingItem.username = username;
        existingItem.role = role;
        existingItem.firstname = firstname;
        existingItem.lastname = lastname;
        existingItem.middlename = middlename;
        existingItem.email = email;
        existingItem.phone = phone;
        existingItem.birthday = birthday;
        existingItem.image = image;
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