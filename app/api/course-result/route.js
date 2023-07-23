import { connectToDB } from "@utils/database";
import CourseResult from "@models/courseResult";


export const GET = async (request) => {
  try {
    await connectToDB();
    const CourseResultList = await CourseResult.find({});
    return new Response(JSON.stringify(CourseResultList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Course Result List'), { status: 500 });
  }
}

export const POST = async (request) => {
  const { title, forPosition, result, userId, startTime, finishTime } = await request.json();
  try {
    await connectToDB();
    const CourseResultItem = new CourseResult({ title, forPosition, result, userId, startTime, finishTime });
    await CourseResultItem.save();
    return new Response(JSON.stringify(CourseResultItem), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify('Failed to POST Course Result'), { status: 500 });
  }
}