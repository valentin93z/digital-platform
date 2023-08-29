import MainIcon from "./icons/MainIcon";
import CoursesIcon from "./icons/CoursesIcon";
import TestsIcon from "./icons/TestsIcon";
import EventsIcon from "./icons/EventsIcon";
import InfoIcon from "./icons/InfoIcon";
import ResultsIcon from "./icons/ResultsIcon";
import AchievementsIcon from "./icons/AchievementsIcon";


const NavIcons = [
  { title: 'Главная', page: 'main', link: '/main', element: MainIcon },
  { title: 'Курсы', page: 'courses', link: '/main/courses', element: CoursesIcon },
  { title: 'Тесты', page: 'tests', link: '/main/tests', element: TestsIcon },
  { title: 'База знаний', page: 'info', link: '/main/info', element: InfoIcon },
  { title: 'Мероприятия', page: 'events', link: '/main/events', element: EventsIcon },
  { title: 'Мои результаты', page: 'results', link: '/main/results', element: ResultsIcon },
  { title: 'Достижения', page: 'achievements', link: '/main/achievements', element: AchievementsIcon },
];

export default NavIcons;