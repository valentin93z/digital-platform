
const AddTestInCourseModal = ({ closeModal, testList, attachedTest, setAttachedTest }) => {

  const handleAddTest = (testId, testTitle) => {
    setAttachedTest({ id: testId, title: testTitle });
    closeModal();
  }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-50' onClick={closeModal}>
      <div className='w-[400px] bg-white dark:bg-neutral-800 rounded-md opacity-100 p-5' onClick={(e) => e.stopPropagation()}>
        <h1 className="text-2xl text-center mb-5">Добавление теста к курсу</h1>
        <div>
          <ul className="flex flex-col gap-3">
            {testList.map((test) =>
            <li
              className="dark:bg-neutral-900 rounded-md py-2 px-3 cursor-pointer hover:text-white hover:bg-violet-500 dark:hover:bg-violet-500"
              key={test._id}
              onClick={() => handleAddTest(test._id, test.title)}
            >
              <p>{test.title}</p>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AddTestInCourseModal