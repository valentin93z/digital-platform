import { connectToDB } from "@utils/database";
import Direction from "@models/direction";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const DirectionItem = await Direction.findById(params.id);
    if (!DirectionItem) return new Response(JSON.stringify('Direction Item not found'), { status: 404 });
    return new Response(JSON.stringify(DirectionItem), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Direction Item', { status: 500 }));
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Direction.findByIdAndRemove(params.id);
    return new Response(JSON.stringify('Direction Item deleted successully', { status: 200 }));
  } catch (error) {
    return new Response(JSON.stringify('Failed to delete Direction Item', { status: 500 }));
  }
}