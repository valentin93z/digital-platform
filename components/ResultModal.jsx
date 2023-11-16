
const ResultModal = ({ setModalResultIsOpen, resultType, existResult, user }) => {

    console.log(existResult);

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-[60]"
      onClick={() => setModalResultIsOpen(false)}
    >
      <div
        className='max-w-full sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5 overflow-y-scroll'
        onClick={(e) => e.stopPropagation()}
      >

        {resultType === 'test' &&
          <div className="flex flex-col gap-5">
              <p>{user.lastname} {user.firstname} {user.middlename}</p>
              <p>{existResult.title}</p>
              <div className="flex justify-start items-center gap-5">
                <p>Правильных ответов: {existResult.trueAnswers}/{existResult.answers.length}</p>
                <p>Результат: {existResult.result}%</p>
              </div>
              <div>
                <h1>Ответы:</h1>
                <ul className="flex flex-col gap-3">
                  {existResult.answers.map((quest) =>
                    <li className="bg-neutral-900 rounded-md p-2">
                      <h2>{quest.quest}</h2>
                      <div className="flex justify-start items-center gap-2">
                        {quest.isTrue
                            ? <p className="text-white bg-green-600 rounded-md px-1">+</p>
                            : <p className="text-white bg-red-600 rounded-md px-1">-</p>}
                        <p>{quest.answerText}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
          </div>
        }

        {resultType === 'course' &&
          <div>
            course
          </div>
        }

      </div>
    </div>
  )
}

export default ResultModal;

// answerId: "q1a2"
// answerText: "2"
// isTrue: true
// q_id: "q1"
// question: "1 + 1 = ?"