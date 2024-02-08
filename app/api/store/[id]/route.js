import { connectToDB } from "@utils/database";
import Store from "@models/store";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const StoreItem = await Store.findById(params.id);
    if (!StoreItem) return new Response(JSON.stringify('Store Item not found'), { status: 404 });
    return new Response(JSON.stringify(StoreItem), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Store Item', { status: 500 }));
  }
}

export const PATCH = async (request, { params }) => {
  const { title, direction, sector } = await request.json();
  try {
      await connectToDB();
      const existingItem = await Store.findById(params.id);
      title && (existingItem.title = title);
      direction && (existingItem.direction = direction);
      sector && (existingItem.sector = sector);
      await existingItem.save();
      return new Response(JSON.stringify(existingItem), { status: 200 });
  } catch (error) {
      return new Response(JSON.stringify('Failed to update Store Item', { status: 500 }));
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Store.findByIdAndRemove(params.id);
    return new Response(JSON.stringify('Store Item deleted successully', { status: 200 }));
  } catch (error) {
    return new Response(JSON.stringify('Failed to delete Store Item', { status: 500 }));
  }
}