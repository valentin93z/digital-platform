import { connectToDB } from "@utils/database";
import TestAnswer from "@models/testAnswer";


export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const testAnswerItem = await TestAnswer.findById(params.id);
        if (!testAnswerItem) return new Response(JSON.stringify('Test Answer Item not found'), { status: 404 });
        return new Response(JSON.stringify(testAnswerItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to fetch Test Answer Item', { status: 500 }));
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        await TestAnswer.findByIdAndRemove(params.id);
        return new Response(JSON.stringify('Test Answer Item deleted successully', { status: 200 }));
    } catch (error) {
        return new Response(JSON.stringify('Failed to delete Test Answer Item', { status: 500 }));
    }
}