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

export const PATCH = async (request, { params }) => {
    const { title, forPosition, attempts, minPercentage, questions, image } = await request.json();
    try {
        await connectToDB();
        const existingItem = await Test.findById(params.id);
        title && (existingItem.title = title);
        forPosition && (existingItem.forPosition = forPosition);
        attempts && (existingItem.attempts = attempts);
        minPercentage && (existingItem.minPercentage = minPercentage);
        questions && (existingItem.questions = questions);
        image && (existingItem.image = image);
        await existingItem.save();
        return new Response(JSON.stringify(existingItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to update Test Item', { status: 500 }));
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