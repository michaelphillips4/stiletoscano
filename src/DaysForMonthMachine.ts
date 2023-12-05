const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getDaysForMonthOptions(
  month: number,
  year: number
): Map<string, number> {
  const monthIndex = month - 1;
  const date = new Date(year, monthIndex, 1);
  const map = new Map<string, number>();
 
  while (date.getMonth() === monthIndex) {
    map.set(`${date.getDate().toString().padStart(2, '0')} - ${names[date.getDay()]}`, date.getDay());
    date.setDate(date.getDate() + 1);
  }
  
  return map;
}

export default getDaysForMonthOptions;
