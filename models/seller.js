const seller = {
    firstname: '',
    lastname: '',
    store: '',
    position: '',
}

const checklist = {
    name: '',
    position: '',
    store: '',
    date: '',
    time: '',
    block_1: {
        name: 'СКОК',
        questions: [
            {
                q: 'Внешний вид соответствует СКОК',
                a: ['да', 'нет'],
            },
            {
                q: 'Когда заходит клиент, сотрудник откладывает все дела и выходит из-за ресепа, готов к продаже',
                a: ['да', 'нет'],
            },
            {
                q: 'Сотрудник не занимается посторонними делами (за искл. предусмотренного в СКОК)',
                a: ['да', 'нет'],
            },
            {
                q: 'Порядок на ТТ (чистота стен, мебели, пола, оборудования)',
                a: ['да', 'нет'],
            },
            {
                q: 'Наличие пустых витрин',
                a: ['да', 'нет'],
            },
        ],
    },
    block_2: {
        name: 'Техника продаж',
        questions: [
            {
                q: 'Вступление в контакт',
                a: ['хозяин дома', 'комментарий (акция)', 'короткий разговор', 'нет', 'клиент проявил инициативу первым'],
            },
            {
                q: 'Выявление потребности в ОТГ',
                a: ['да', 'нет', 'клиент сам озвучил потребность'],
            },
            {
                q: 'Предложение ОТГ (обязательный пункт из ТП при отсутствии звука)',
                a: ['да', 'нет'],
            },
            {
                q: 'Что предложено из ОТГ',
                a: ['...'],
            },
            {
                q: 'Отработаны ли возражения по ОТГ',
                a: ['да', 'нет', 'возражений не было'],
            },
            {
                q: 'Выявление потребности в доп.товарах и услугах',
                a: ['да', 'нет'],
            },
            {
                q: 'Предложение доп.товаров и услуг (обязательный пункт из ТП при отсутствии звука)',
                a: ['да', 'нет'],
            },
            {
                q: 'Что предложено из доп.товаров и услуг',
                a: ['...'],
            },
            {
                q: 'Отработаны ли возражения по доп.товарам и услугам',
                a: ['да', 'нет', 'возражений не было'],
            },
        ],
    },
    block_3: {
        name: 'Техника безопасности',
        questions: [
            {
                q: 'Нарушение техники безопасности и трудовой дисциплины',
                a: ['да', 'нет', '...', '...'],
            },
            {
                q: 'ЧП на ТТ (дополнительно опишите в комментариях)',
                a: ['да', 'нет'],
            },
        ],
    },
    comment: '...',
    evaluate: 'Петров С.В.',
    total: '100%'
}