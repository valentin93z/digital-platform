import { connectToDB } from "@utils/database";
import Event from "@models/event";

export const GET = async (request) => {
  try {
    await connectToDB();
    const EventList = await Event.find({});
    return new Response(JSON.stringify(EventList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Event List'), { status: 500 });
  }
}

export const POST = async (request) => {
  const { year, month, day, hours, minutes, title, type, description, duration, members, link } = await request.json();
  try {
    await connectToDB();
    const EventItem = new Event({ year, month, day, hours, minutes, title, type, description, duration, members, link });
    await EventItem.save();
    return new Response(JSON.stringify(EventItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to POST Event item'), { status: 500 });
  }
}