import MainIcon from "./icons/MainIcon";
import CoursesIcon from "./icons/CoursesIcon";
import EventsIcon from "./icons/EventsIcon";
import InfoIcon from "./icons/InfoIcon";
import ResultsIcon from "./icons/ResultsIcon";
import UsersIcon from "./icons/UsersIcon";
import StoreIcon from "./icons/StoreIcon";


const NavIconsAdmin = [
    { title: 'Главная', page: 'dashboard', link: '/dashboard', element: MainIcon },
    { title: 'Пользователи', page: 'users', link: '/dashboard/users', element: UsersIcon },
    { title: 'Торговые точки', page: 'stores', link: '/dashboard/stores', element: StoreIcon },
    { title: 'Учебные материалы', page: 'education', link: '/dashboard/education', element: CoursesIcon },
    { title: 'Мероприятия', page: 'events', link: '/dashboard/events', element: EventsIcon },
    { title: 'База знаний', page: 'info', link: '/dashboard/info', element: InfoIcon },
    { title: 'Отчеты', page: 'results', link: '/dashboard/results', element: ResultsIcon },
];

export default NavIconsAdmin;