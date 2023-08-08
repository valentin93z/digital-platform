import { connectToDB } from "@utils/database";
import TestResult from "@models/testResult";
import { testQuestions } from "@models/examp";
import User from "@models/user";

export const GET = async (request) => {
  // const { id } = await request.json();
  try {
    await connectToDB();
    // const UserItem = await User.findById(id);
    const TestResultList = await TestResult.find({});
    return new Response(JSON.stringify(TestResultList), { status: 200 });
    // if (UserItem.role === 'admin' || UserItem.role === 'office') {
    //   const TestResultList = await TestResult.find({});
    //   return new Response(JSON.stringify(TestResultList), { status: 200 });
    // }
    // if (UserItem.role === 'retail') {
    //   const TestResultList = await TestResult.find({userId: id});
    //   return new Response(JSON.stringify(TestResultList), { status: 200 });
    // }
  } catch (error) {
    return new Response(JSON.stringify('Failed to fetch Test Result List'), { status: 500 });
  }
}

export const POST = async (request) => {
    const { title, forPosition, answers, userId, startTime, finishTime } = await request.json();
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
    const testResultItem = new TestResult({ title, forPosition, answers: [...answers], trueAnswers, result, userId, startTime, finishTime });
    console.log(testResultItem);
    await testResultItem.save();
    return new Response(JSON.stringify(testResultItem), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify('Failed to POST Test Result'), { status: 500 });
  }
}