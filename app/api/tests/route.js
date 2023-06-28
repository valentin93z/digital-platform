import { connectToDB } from "@utils/database";
import Test from "@models/test";


export const GET = async (request) => {
  try {
    await connectToDB();
    const TestList = await Test.find({});
    return new Response(JSON.stringify(TestList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Test List'), { status: 500 });
  }
}

export const POST = async (request) => {
  const { title, forPosition, minPercentage, attempts, deadline, questions } = await request.json();
  try {
    await connectToDB();
    const testItem = new Test({ title, forPosition, minPercentage, attempts, deadline, questions: [...questions] });
    await testItem.save();
    return new Response(JSON.stringify(testItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to POST test item'), { status: 500 });
  }
}