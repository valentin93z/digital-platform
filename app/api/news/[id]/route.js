import { connectToDB } from "@utils/database";
import News from "@models/news";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const NewsItem = await News.findById(params.id);
    if (!NewsItem) return new Response(JSON.stringify('News Item not found'), { status: 404 });
    return new Response(JSON.stringify(NewsItem), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch News Item', { status: 500 }));
  }
}

export const PATCH = async (request, { params }) => {
  const { title, description, image, date, tags } = await request.json();
  try {
      await connectToDB();
      const existingItem = await News.findById(params.id);
      title && (existingItem.title = title);
      description && (existingItem.description = description);
      image && (existingItem.image = image);
      date && (existingItem.date = date);
      tags && (existingItem.tags = tags);
      await existingItem.save();
      return new Response(JSON.stringify(existingItem), { status: 200 });
  } catch (error) {
      return new Response(JSON.stringify('Failed to update News Item', { status: 500 }));
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await News.findByIdAndRemove(params.id);
    return new Response(JSON.stringify('News Item deleted successully', { status: 200 }));
  } catch (error) {
    return new Response(JSON.stringify('Failed to delete News Item', { status: 500 }));
  }
}