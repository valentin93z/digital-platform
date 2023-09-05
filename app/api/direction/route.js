import { connectToDB } from "@utils/database";
import Direction from "@models/direction";

export const GET = async (request) => {
  try {
    await connectToDB();
    const DirectionList = await Direction.find({});
    return new Response(JSON.stringify(DirectionList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Direction List'), { status: 500 });
  }
}

export const POST = async (request) => {
  const { title } = await request.json();
  try {
    await connectToDB();
    const DirectionItem = new Direction({ title });
    await DirectionItem.save();
    return new Response(JSON.stringify(DirectionItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to POST Direction item'), { status: 500 });
  }
}