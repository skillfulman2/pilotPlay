function calculateDaysBetweenDates(startDate, endDate) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (endDate - startDate) / millisecondsPerDay;
}