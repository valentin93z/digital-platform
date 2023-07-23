import { connectToDB } from "@utils/database";
import CourseResult from "@models/courseResult";


export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const CourseResultItem = await CourseResult.findById(params.id);
    if (!CourseResultItem) return new Response(JSON.stringify('Course Result Item not found'), { status: 404 });
    return new Response(JSON.stringify(CourseResultItem), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Course Result Item', { status: 500 }));
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await CourseResult.findByIdAndRemove(params.id);
    return new Response(JSON.stringify('Course Result Item deleted successully', { status: 200 }));
  } catch (error) {
    return new Response(JSON.stringify('Failed to delete Course Result Item', { status: 500 }));
  }
}