import { connectToDB } from "@utils/database";
import TestResult from "@models/testResult";


export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const testResultItem = await TestResult.findById(params.id);
        if (!testResultItem) return new Response(JSON.stringify('Test Result Item not found'), { status: 404 });
        return new Response(JSON.stringify(testResultItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify('Failed to fetch Test Result Item', { status: 500 }));
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        await TestResult.findByIdAndRemove(params.id);
        return new Response(JSON.stringify('Test Result Item deleted successully', { status: 200 }));
    } catch (error) {
        return new Response(JSON.stringify('Failed to delete Test Result Item', { status: 500 }));
    }
}