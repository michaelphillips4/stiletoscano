const MonthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DaysNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getDaysForMonthOptions = (
  month: number,
  year: number
): Map<string, number> => {
  const monthIndex = month - 1;
  const date = new Date(year, monthIndex, 1);
  const map = new Map<string, number>();

  while (date.getMonth() === monthIndex) {
    map.set(
      `${date.getDate().toString().padStart(2, "0")} - ${
        DaysNames[date.getDay()]
      }`,
      date.getDay()
    );
    date.setDate(date.getDate() + 1);
  }

  return map;
};

const getMonthsOptions = (
  now: Date
): Map<string, { month: number; year: number }> => {
  const year = now.getFullYear();
  const currentYears = MonthsNames.slice(now.getMonth());
  const nextYears = MonthsNames.slice(0, now.getMonth());
  const map = new Map<string, { month: number; year: number }>();
  currentYears.forEach((month) =>
    map.set(`${month} ${year}`, { month: MonthsNames.indexOf(month), year })
  );
  nextYears.forEach((month) =>
    map.set(`${month} ${year + 1}`, {
      month: MonthsNames.indexOf(month),
      year: year + 1,
    })
  );
  return map;
};

export { getMonthsOptions, getDaysForMonthOptions };
