export const cmQuestions = [
    {
        blockName: 'СКОК',
        questions: [
            {
                id: 'group1_q1',
                name: 'group1_q1',
                q: 'Внешний вид соответствует СКОК',
                a: [{ id: 'group1_q1_a1', a: 'Да' }, { id: 'group1_q1_a2', a: 'Нет' }],
            },
            {
                id: 'group1_q2',
                name: 'group1_q2',
                q: 'Когда заходит клиент, сотрудник откладывает все дела и выходит из-за ресепа, готов к продаже',
                a: [{ id: 'group1_q2_a1', a: 'Да' }, { id: 'group1_q2_a2', a: 'Нет' }],
            },
            {
                id: 'group1_q3',
                name: 'group1_q3',
                q: 'Сотрудник не занимается посторонними делами (за искл. предусмотренного в СКОК)',
                a: [{ id: 'group1_q3_a1', a: 'Да' }, { id: 'group1_q3_a2', a: 'Нет' }],
            },
            {
                id: 'group1_q4',
                name: 'group1_q4',
                q: 'Порядок на ТТ (чистота стен, мебели, пола, оборудования)',
                a: [{ id: 'group1_q4_a1', a: 'Да' }, { id: 'group1_q4_a2', a: 'Нет' }],
            },
            {
                id: 'group1_q5',
                name: 'group1_q5',
                q: 'Наличие пустых витрин',
                a: [{ id: 'group1_q5_a1', a: 'Да' }, { id: 'group1_q5_a2', a: 'Нет' }],
            },
        ],
    },
    {
        blockName: 'Техника продаж',
        questions: [
            {
                id: 'group2_q1',
                name: 'group2_q1',
                q: 'Вступление в контакт',
                a: [
                    { id: 'group2_q1_a1', a: 'Хозяин дома' },
                    { id: 'group2_q1_a2', a: 'Комментарий(акция)' },
                    { id: 'group2_q1_a3', a: 'Короткий разговор' },
                    { id: 'group2_q1_a4', a: 'Клиент проявил инициативу первым' },
                    { id: 'group2_q1_a5', a: 'Нет' },
                    { id: 'group2_q1_a6', a: 'Невозможно оценить' },
                ],
            },
            {
                id: 'group2_q2',
                name: 'group2_q2',
                q: 'Выявление потребности в ОТГ',
                a: [
                    { id: 'group2_q2_a1', a: 'Да' },
                    { id: 'group2_q2_a2', a: 'Нет' },
                    { id: 'group2_q2_a3', a: 'Клиент сам озвучил потребность' },
                    { id: 'group2_q2_a4', a: 'Невозможно оценить' },
                ],
            },
            {
                id: 'group2_q3',
                name: 'group2_q3',
                q: 'Предложение ОТГ (обязательный пункт из ТП при отсутствии звука)',
                a: [
                    { id: 'group2_q3_a1', a: 'Да' },
                    { id: 'group2_q3_a2', a: 'Нет' },
                    { id: 'group2_q3_a3', a: 'Невозможно оценить' },
                ],
            },
            {
                id: 'group2_q4',
                name: 'group2_q4',
                q: 'Что предложено из ОТГ',
                a: [{ id: 'group2_q4_a1', a: 'INPUT_TEXT' }],
            },
            {
                id: 'group2_q5',
                name: 'group2_q5',
                q: 'Отработаны ли возражения по ОТГ',
                a: [
                    { id: 'group2_q5_a1', a: 'Да' },
                    { id: 'group2_q5_a2', a: 'Нет' },
                    { id: 'group2_q5_a3', a: 'Возражений не было' },
                    { id: 'group2_q5_a4', a: 'Невозможно оценить' },
                ],
            },
            {
                id: 'group2_q6',
                name: 'group2_q6',
                q: 'Выявление потребности в доп.товарах и услугах',
                a: [
                    { id: 'group2_q6_a1', a: 'Да' },
                    { id: 'group2_q6_a2', a: 'Нет' },
                    { id: 'group2_q6_a3', a: 'Невозможно оценить' },
                ],
            },
            {
                id: 'group2_q7',
                name: 'group2_q7',
                q: 'Предложение доп.товаров и услуг (обязательный пункт из ТП при отсутствии звука)',
                a: [
                    { id: 'group2_q7_a1', a: 'Да' },
                    { id: 'group2_q7_a2', a: 'Нет' },
                    { id: 'group2_q7_a3', a: 'Невозможно оценить' },
                ],
            },
            {
                id: 'group2_q8',
                name: 'group2_q8',
                q: 'Что предложено из доп.товаров и услуг',
                a: [{ id: 'group2_q8_a1', a: 'INPUT_TEXT' }],
            },
            {
                id: 'group2_q9',
                name: 'group2_q9',
                q: 'Отработаны ли возражения по доп.товарам и услугам',
                a: [
                    { id: 'group2_q9_a1', a: 'Да' },
                    { id: 'group2_q9_a2', a: 'Нет' },
                    { id: 'group2_q9_a3', a: 'Возражений не было' },
                    { id: 'group2_q9_a4', a: 'Невозможно оценить' },
                ],
            },
        ],
    },
    {
        blockName: 'Техника безопасности',
        questions: [
            {
                id: 'group3_q1',
                name: 'group3_q1',
                q: 'Нарушение техники безопасности и трудовой дисциплины',
                a: [
                    { id: 'group3_q1_a1', a: 'Да' },
                    { id: 'group3_q1_a2', a: 'Нет' },
                    { id: 'group3_q1_a3', a: '...' },
                ],
            },
            {
                id: 'group3_q2',
                name: 'group3_q3',
                q: 'ЧП на ТТ (дополнительно опишите в комментариях)',
                a: [
                    { id: 'group3_q2_a1', a: 'Да' },
                    { id: 'group3_q2_a2', a: 'Нет' },
                ],
            },
        ],
    },
    {
        blockName: 'Комментарий',
        questions: [
            {
                id: 'group4_q1',
                name: 'group4_q1',
                q: 'Комментарий',
                a: [{ id: 'group4_q1_a1', a: 'TEXTAREA' }],
            },
        ],
    },
];