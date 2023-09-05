import { connectToDB } from "@utils/database";
import Store from "@models/store";

export const GET = async (request) => {
  try {
    await connectToDB();
    const StoreList = await Store.find({});
    return new Response(JSON.stringify(StoreList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Store List'), { status: 500 });
  }
}

export const POST = async (request) => {
  const { title, direction, sector } = await request.json();
  try {
    await connectToDB();
    const StoreItem = new Store({ title, direction, sector });
    await StoreItem.save();
    return new Response(JSON.stringify(StoreItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to POST Store item'), { status: 500 });
  }
}