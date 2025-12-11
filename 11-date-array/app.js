function filterAndFormatDates(strings) {
  return strings
    .map(str => str.replace(/\//g, '-'))
    .filter(str => {
      const [dayStr, monthStr, yearStr] = str.split('-');
      const day = Number(dayStr);
      const month = Number(monthStr);
      const year = Number(yearStr);

      if (!day || !month || !year) return false;
      if (month < 1 || month > 12) return false;
      if (day < 1 || day > 31) return false;

      const date = new Date(year, month - 1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    })
    .map(str => {
      const [dayStr, monthStr, yearStr] = str.split('-');
      const day = dayStr.padStart(2, '0');
      const month = monthStr.padStart(2, '0');
      return `${day}-${month}-${yearStr}`;
    });
}

const result = filterAndFormatDates(arr);