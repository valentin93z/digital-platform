import { connectToDB } from "@utils/database";
import Course from "@models/course";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const CourseItem = await Course.findById(params.id);
    if (!CourseItem) return new Response(JSON.stringify('Course Item not found'), { status: 404 });
    return new Response(JSON.stringify(CourseItem), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Course Item', { status: 500 }));
  }
}

export const PATCH = async (request, { params }) => {
  const { title, description, forPosition, imageUrl, path } = await request.json();
  try {
      await connectToDB();
      const existingItem = await Course.findById(params.id);
      title && (existingItem.title = title);
      description && (existingItem.description = description);
      forPosition && (existingItem.forPosition = forPosition);
      imageUrl && (existingItem.imageUrl = imageUrl);
      path && (existingItem.path = path);
      await existingItem.save();
      return new Response(JSON.stringify(existingItem), { status: 200 });
  } catch (error) {
      return new Response(JSON.stringify('Failed to update Course Item', { status: 500 }));
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Course.findByIdAndRemove(params.id);
    return new Response(JSON.stringify('Course Item deleted successully', { status: 200 }));
  } catch (error) {
    return new Response(JSON.stringify('Failed to delete Course Item', { status: 500 }));
  }
}