import MainIcon from "./icons/MainIcon";
import ProgramsIcon from "./icons/ProgramsIcon";
import CoursesIcon from "./icons/CoursesIcon";
import MediaIcon from "./icons/MediaIcon";
import TestsIcon from "./icons/TestsIcon";
import EventsIcon from "./icons/EventsIcon";
import InfoIcon from "./icons/InfoIcon";
import NewsIcon from "./icons/NewsIcon";
import ResultsIcon from "./icons/ResultsIcon";
import AchievementsIcon from "./icons/AchievementsIcon";
import TasksIcon from "./icons/TasksIcon";


const NavIcons = [
  { title: 'Главная', page: 'main', link: '/main', element: MainIcon },
  { title: 'Программы обучения', page: 'programs', link: '/main/programs', element: ProgramsIcon },
  { title: 'Курсы', page: 'courses', link: '/main/courses', element: CoursesIcon },
  { title: 'Медиатека', page: 'media', link: '/main/media', element: MediaIcon },
  { title: 'Тесты', page: 'tests', link: '/main/tests', element: TestsIcon },
  { title: 'Мероприятия', page: 'events', link: '/main/events', element: EventsIcon },
  { title: 'База знаний', page: 'info', link: '/main/info', element: InfoIcon },
  { title: 'Новости', page: 'news', link: '/main/news', element: NewsIcon },
  { title: 'Мои результаты', page: 'results', link: '/main/results', element: ResultsIcon },
  { title: 'Достижения', page: 'achievements', link: '/main/achievements', element: AchievementsIcon },
  { title: 'Задания', page: 'tasks', link: '/main/tasks', element: TasksIcon },
];

export default NavIcons;