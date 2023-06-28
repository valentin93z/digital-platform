import { connectToDB } from "@utils/database";
import User from "@models/user";


export const GET = async (request) => {
  try {
    await connectToDB();
    const usersList = await User.find({});
    return new Response(JSON.stringify(usersList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Users List'), { status: 500 });
  }
}

export const POST = async (request) => {
  const { username, password, role, firstname, lastname, middlename, email, phone, birthday, image } = await request.json();
  try {
    await connectToDB();
    const userItem = new User({ username, password, role, firstname, lastname, middlename, email, phone, birthday, image });
    await userItem.save();
    return new Response(JSON.stringify(userItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to POST user item'), { status: 500 });
  }
}