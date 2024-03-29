export const parsePosition = (position) => {
    switch (position) {
        case 'svk':
            return 'СВК';
            break;
        case 'pk':
            return 'ПК';
            break;
        case 'zum':
            return 'ЗУМ';
            break;
        case 'um':
            return 'УМ';
            break;
        case 'trainee':
            return 'Стажер';
            break;
        default:
            console.log('Должность сотрудника неизвестна');
            return 'Неизвестно';
    }
}

export const parseRole = (role) => {
    switch (role) {
        case 'admin':
            return 'Администратор';
            break;
        case 'retail':
            return 'Сотрудник розницы';
            break;
        case 'retail-trainee':
            return 'Сотрудник розницы (стажер)';
            break;
        case 'retail-adapt':
            return 'Сотрудник розницы (на адаптации)';
            break;
        case 'office':
            return 'Сотрудник офиса';
            break;
        default:
            console.log('Роль сотрудника неизвестна');
            return 'Неизвестно';
    }
}


export const parseDateFormat = (date) => {
    const day = new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : `${new Date(date).getDate()}`;
    const month = new Date(date).getMonth() < 10 ? `0${new Date(date).getMonth()}` : `${new Date(date).getMonth()}`;
    const year = `${new Date(date).getFullYear()}`;
    return `${day}.${month}.${year}`;
}