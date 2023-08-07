import { connectToDB } from "@utils/database";
import Event from "@models/event";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const EventItem = await Event.findById(params.id);
    if (!EventItem) return new Response(JSON.stringify('Event Item not found'), { status: 404 });
    return new Response(JSON.stringify(EventItem), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Event Item', { status: 500 }));
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Event.findByIdAndRemove(params.id);
    return new Response(JSON.stringify('Event Item deleted successully', { status: 200 }));
  } catch (error) {
    return new Response(JSON.stringify('Failed to delete Event Item', { status: 500 }));
  }
}