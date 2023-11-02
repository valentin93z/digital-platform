import { connectToDB } from "@utils/database";
import News from "@models/news";

export const GET = async (request) => {
  try {
    await connectToDB();
    const NewsList = await News.find({});
    return new Response(JSON.stringify(NewsList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch News List'), { status: 500 });
  }
}

export const POST = async (request) => {
  const { title, description, image, date, tags } = await request.json();
  try {
    await connectToDB();
    const NewsItem = new News({ title, description, image, date, tags });
    await NewsItem.save();
    return new Response(JSON.stringify(NewsItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to POST News item'), { status: 500 });
  }
}