import { connectToDB } from "@utils/database";
import TestAnswer from "@models/testAnswer";
import { testQuestions } from "@models/examp";

export const GET = async (request) => {
  try {
    await connectToDB();
    const TestAnswersList = await TestAnswer.find({});
    return new Response(JSON.stringify(TestAnswersList), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Test Answers List'), { status: 500 });
  }
}

export const POST = async (request) => {
    const { title, forPosition, answers } = await request.json();
    // testQuestion is imitated DB.
    let trueAnswers = 0;
    let result = 0;
    answers.forEach((answer) => {
      testQuestions.forEach((quest) => {
        quest.answers.forEach((a) => {
          if (a.a_id === answer.answerId) {
            trueAnswers = trueAnswers + a.value;
            if (a.value === 1) {
              answer.isTrue = true;
            } else {
              answer.isTrue = false;
            }
          }
        })
      })
    })
    result = (100 / answers.length * trueAnswers).toFixed(1);

  try {
    await connectToDB();
    const testAnswersItem = new TestAnswer({ title, forPosition, answers: [...answers], trueAnswers, result });
    await testAnswersItem.save();
    return new Response(JSON.stringify(testAnswersItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify('Failed to POST test results'), { status: 500 });
  }
}