import { connectToDB } from "@utils/database";
import Course from "@models/course";

export const GET = async (request) => {
  try {
    await connectToDB();
    const CourseList = await Course.find({});
    return new Response(JSON.stringify(CourseList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Course List'), { status: 500 });
  }
}

export const POST = async (request) => {
  const { title, description, forPosition, imageUrl, path } = await request.json();
  try {
    await connectToDB();
    const CourseItem = new Course({ title, description, forPosition, imageUrl, path });
    await CourseItem.save();
    return new Response(JSON.stringify(CourseItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to POST Course item'), { status: 500 });
  }
}