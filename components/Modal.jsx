import { cmQuestions } from "@utils/cmQuestions";
import { checkQuest } from "@utils/checkQuest";
import FilledVioletButton from "./buttons/FilledVioletButton";
import OutlinedButton from "./buttons/OutlinedButton";
import NewFormInput from "./inputs/NewFormInput";
import NewFormSelect from "./selects/NewFormSelect";
import { sellersPositions, sectors, stores } from '@utils/NewFormSelectData';

const Modal = ({ closeModal, newControlItem, setNewControlItem, handleSave, handleReset }) => {

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-50' onClick={closeModal}>
        <div className='max-w-full sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5 overflow-y-scroll' onClick={(e) => e.stopPropagation()}>
          <form className="" onSubmit={handleSave}>
            <div className='w-full sm:w-[50%] flex flex-col gap-5'>
              <div className="w-full flex justify-stretch items-center gap-2">
                <p className="w-full">Дата:</p>
                <NewFormInput
                  type='date'
                  value={newControlItem.date}
                  onChange={(e) => setNewControlItem({ ...newControlItem, date: e.target.value })}
                />
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <p>Время:</p>
                <NewFormInput
                  type='time'
                  value={newControlItem.time}
                  onChange={(e) => setNewControlItem({ ...newControlItem, time: e.target.value })}
                />
              </div>
            </div>
            <div className='w-full sm:w-[50%] flex flex-col gap-5 pt-5'>
              <div className="w-full flex justify-between items-center gap-2">
                <p>Торговая точка:</p>
                  <NewFormSelect
                    data={stores}
                    value={newControlItem}
                    setValue={setNewControlItem}
                    exist='store'
                  />
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <p>Сектор:</p>
                  <NewFormSelect
                    data={sectors}
                    value={newControlItem}
                    setValue={setNewControlItem}
                    exist='sector'
                  />
              </div>
            </div>
            <div className='w-full sm:w-[50%] flex flex-col gap-5 pt-5'>
              <NewFormInput
                type='text'
                placeholder='ФИО сотрудника'
                value={newControlItem.seller}
                onChange={(e) => setNewControlItem({ ...newControlItem, seller: e.target.value })}
              />
              <div className="w-full flex justify-between items-center gap-2">
                <p>Должность:</p>
                <NewFormSelect
                  data={sellersPositions}
                  value={newControlItem}
                  setValue={setNewControlItem}
                  exist='sellerPosition'
                />
              </div>
            </div>
            {cmQuestions.map((block, index) => (
              <div className="flex flex-col gap-5 pt-5" key={block.blockName}>
                <h1
                  className="font-medium leading-3 violet_gray_text dark:text-white bg-violet-100 dark:bg-violet-500 py-2 pl-5 rounded-sm"
                >
                  {block.blockName === 'Комментарий' ? 'Комментарий:' : `Блок ${index + 1}: ${block.blockName}`}
                </h1>
                <div className="flex flex-col gap-5 text-sm">
                  {block.questions.map((quest) => (
                    <div className="border border-solid border-violet-100 rounded-md p-3" key={quest.id}>
                      {quest.q !== 'Комментарий' && <p>{quest.q}</p>}
                      <div>
                        {quest.a.map((answer) => (
                            answer.a === 'INPUT_TEXT' ? (
                              <input
                                key={answer.id}
                                type="text"
                                value={newControlItem.answers?.filter((i) => i.answerId === answer.id)[0]?.answerText}
                                onChange={(e) => setNewControlItem(({ ...newControlItem, answers: checkQuest(newControlItem.answers, quest.id) ? [...newControlItem.answers.filter((i) => i.questId !== quest.id), { questId: quest.id, questText: quest.q, answerId: answer.id, answerText: e.target.value }] : [...newControlItem.answers, { questId: quest.id, questText: quest.q, answerId: answer.id, answerText: e.target.value }] }))}
                              /> ) : answer.a === 'TEXTAREA' ? (
                                <textarea
                                  className="w-full resize-none outline-none"
                                  key={answer.id}
                                  placeholder="Комментарий..."
                                  rows={5}
                                  cols={40}
                                  value={newControlItem.answers?.filter((i) => i.answerId === answer.id)[0]?.answerText}
                                  onChange={(e) => setNewControlItem(({ ...newControlItem, answers: checkQuest(newControlItem.answers, quest.id) ? [...newControlItem.answers.filter((i) => i.questId !== quest.id), { questId: quest.id, questText: quest.q, answerId: answer.id, answerText: e.target.value }] : [...newControlItem.answers, { questId: quest.id, questText: quest.q, answerId: answer.id, answerText: e.target.value }] }))}
                                />) : (
                                <div key={answer.id}>
                                  <input
                                    id={answer.id}
                                    name={quest.name}
                                    type="radio"
                                    value={answer.id}
                                    onChange={() => setNewControlItem({ ...newControlItem, answers: checkQuest(newControlItem.answers, quest.id) ? [...newControlItem.answers.filter((i) => i.questId !== quest.id), { questId: quest.id, questText: quest.q, answerId: answer.id, answerText: answer.a }] : [...newControlItem.answers, { questId: quest.id, questText: quest.q, answerId: answer.id, answerText: answer.a }] })}
                                    required
                                  />
                                  <label htmlFor={answer.id}>{answer.a}</label>
                                </div>)
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-5">
              <OutlinedButton type='button' text='Отмена' onClick={handleReset} />
              <FilledVioletButton type='submit' text='Сохранить' />
            </div>
          </form>
        </div>
    </div>
  )
}

export default Modal;