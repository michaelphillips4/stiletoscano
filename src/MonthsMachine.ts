
const months = [
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

function getMonthsOptions(now: Date) : Map<string,{month: number,year: number}> {
    const year = now.getFullYear();
    const currentYears = months.slice(now.getMonth());
    const nextYears = months.slice(0, now.getMonth());
    const map = new Map<string,{month: number,year: number}>();
    currentYears.forEach((month) => map.set(`${month} ${year}`,{month:months.indexOf(month),year}));
    nextYears.forEach((month) => map.set(`${month} ${year +1}`,{month:months.indexOf(month),year :year + 1}));
    return map;
  };

  export default getMonthsOptions;

