import { connectToDB } from "@utils/database";
import Test from "@models/test";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const testItem = await Test.findById(params.id);
        if (!testItem) return new Response(JSON.stringify('Test Item not found'), { status: 404 });
        return new Response(JSON.stringify(testItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to fetch Test Item', { status: 500 }));
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        await Test.findByIdAndRemove(params.id);
        return new Response(JSON.stringify('Test Item deleted successully', { status: 200 }));
    } catch (error) {
        return new Response(JSON.stringify('Failed to delete Test Item', { status: 500 }));
    }
}