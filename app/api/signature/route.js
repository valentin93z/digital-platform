import { v2 as cloudinary } from 'cloudinary';

export const POST = async (request) => {
  try {
    const { folder } = await request.json();
    console.log(folder);
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp, folder: folder }, process.env.NEXT_CLOUDINARY_API_SECRET);
    return new Response(JSON.stringify({ signature, timestamp }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Error of Signature', folder), { status: 500 });
  }
}