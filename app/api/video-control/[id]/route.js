import { connectToDB } from "@utils/database";
import VideoControl from "@models/videoControl";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const videoControlItem = await VideoControl.findById(params.id);
        if (!videoControlItem) return new Response(JSON.stringify('Video Control Item not found'), { status: 404 });
        return new Response(JSON.stringify(videoControlItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to fetch Video Control Item', { status: 500 }));
    }
}

export const PATCH = async (request, { params }) => {
    const { date, time, store, sector, seller, sellerPosition, answers, creator } = await request.json();
    try {
        await connectToDB();
        const existingItem = await VideoControl.findById(params.id);
        existingItem.date = date;
        existingItem.time = time;
        existingItem.store = store;
        existingItem.sector = sector;
        existingItem.seller = seller;
        existingItem.sellerPosition = sellerPosition;
        existingItem.answers = [...answers];
        existingItem.creator = creator;
        await existingItem.save();
        return new Response(JSON.stringify(existingItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to update Video Control Item'), { status: 500 });
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        await VideoControl.findByIdAndRemove(params.id);
        return new Response(JSON.stringify('Video Control Item deleted successully', { status: 200 }));
    } catch (error) {
        return new Response(JSON.stringify('Failed to delete Video Control Item', { status: 500 }));
    }
}