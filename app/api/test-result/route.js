import { connectToDB } from "@utils/database";
import TestResult from "@models/testResult";
import User from "@models/user";
import Test from "@models/test";

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
    const { test_id, title, forPosition, answers, userId, startTime, finishTime } = await request.json();
    
  try {
    await connectToDB();
    const existTest = await Test.findById(test_id);

    let trueAnswers = 0;
    let result = 0;
    let status = 'failed';

    answers.forEach((answer) => {

      if (answer.type === 'Единственный выбор') {
        existTest.questions.forEach((quest) => {
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
      }

      if (answer.type === 'Множественный выбор') {
        existTest.questions.forEach((quest) => {
          if (quest.q_id === answer.q_id) {
            const sumValue = quest.answers.filter((a) => a.value === 1).length;
            let resultValue = 0;
            quest.answers.forEach((a) => {
              answer.variants.forEach((variant) => {
                if (variant.answerId === a.a_id) {
                  resultValue = resultValue + a.value;
                }
              })
            })
            if (resultValue === sumValue) {
              trueAnswers = trueAnswers + 1;
              answer.isTrue = true;
            } else {
              answer.isTrue = false;
            }
          }
        })
      }
    })

    result = (100 / answers.length * trueAnswers).toFixed(1);
    if (result >= existTest.minPercentage) {
      status = 'passed';
    }

    const testResultItem = new TestResult({ test_id, title, forPosition, answers: [...answers], trueAnswers, result, status, userId, startTime, finishTime });
    console.log(testResultItem);
    await testResultItem.save();
    return new Response(JSON.stringify(testResultItem), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify('Failed to POST Test Result'), { status: 500 });
  }
}