import { connectToDB } from "@utils/database";
import Sector from "@models/sector";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const SectorItem = await Sector.findById(params.id);
    if (!SectorItem) return new Response(JSON.stringify('Sector Item not found'), { status: 404 });
    return new Response(JSON.stringify(SectorItem), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Sector Item', { status: 500 }));
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Sector.findByIdAndRemove(params.id);
    return new Response(JSON.stringify('Sector Item deleted successully', { status: 200 }));
  } catch (error) {
    return new Response(JSON.stringify('Failed to delete Sector Item', { status: 500 }));
  }
}