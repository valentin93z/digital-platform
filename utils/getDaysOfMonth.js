import { getDayOfWeek } from "./getDayOfWeek";

export const getDaysOfMonth = (y, m) => {

  const days = [];
  const count = 33 - new Date(y, m, 33).getDate();

  for (let i = 1; i <= count; i++) {
    const day = {
      year: y,
      month: m,
      dayOfMonth: i,
      dayOfWeek: getDayOfWeek(new Date(y, m, i).getDay()),
    }
    days.push(day);
  }

  return days;
}