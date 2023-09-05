import { connectToDB } from "@utils/database";
import Sector from "@models/sector";

export const GET = async (request) => {
  try {
    await connectToDB();
    const SectorList = await Sector.find({});
    return new Response(JSON.stringify(SectorList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Sector List'), { status: 500 });
  }
}

export const POST = async (request) => {
  const { title, leader } = await request.json();
  try {
    await connectToDB();
    const SectorItem = new Sector({ title, leader });
    await SectorItem.save();
    return new Response(JSON.stringify(SectorItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to POST Sector item'), { status: 500 });
  }
}