function printWeekdayName(dayNumber) {
  if (dayNumber < 1 || dayNumber > 7) {
    console.log("Invalid day number. Please enter a number between 1 and 7.");
    return;
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekdayName = daysOfWeek[dayNumber - 1];
  console.log(`The name of the weekday is: ${weekdayName}`);
  // console.log(typeof daysOfWeek);
}

printWeekdayName(1);
printWeekdayName(5);
