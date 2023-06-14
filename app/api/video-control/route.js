import { connectToDB } from "@utils/database";
import VideoControl from "@models/videoControl";

export const GET = async (request) => {
    try {
        await connectToDB();
        const videoControlList = await VideoControl.find({});
        return new Response(JSON.stringify(videoControlList), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to fetch Video Control List'), { status: 500 });
    }
}

export const POST = async (request) => {
    const { date, time, store, sector, seller, sellerPosition, answers, creator } = await request.json();
    try {
        await connectToDB();
        const newVideoControlItem = new VideoControl({ date, time, store, sector, seller, sellerPosition, answers: [...answers], creator });
        await newVideoControlItem.save();
        return new Response(JSON.stringify(newVideoControlItem), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to vreate nes Video Control Item'), { status: 500 });
    }
}