// Calendar

// Create a function called createCalendar(year, month)
// The function should create a calendar for the given year/month.
// The calendar should be a table, where a week is <tr>, and a day is <td>.
// The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.

let centuryCodes = [
  { name: "1700s", code: 4 },
  { name: "1800s", code: 2 },
  { name: "1900s", code: 0 },
  { name: "2000s", code: 6 },
  { name: "2100s", code: 4 },
  { name: "2200s", code: 2 },
  { name: "2300s", code: 0 },
];

let weekDays = [
  { name: "MO", sort: 1, code: 1 },
  { name: "TU", sort: 2, code: 2 },
  { name: "WE", sort: 3, code: 3 },
  { name: "TH", sort: 4, code: 4 },
  { name: "FR", sort: 5, code: 5 },
  { name: "SA", sort: 6, code: 6 },
  { name: "SU", sort: 7, code: 0 },
];

let months = [
  { name: "January", sort: 1, days: 31, code: 0 },
  { name: "February", sort: 2, days: 28, code: 3 },
  { name: "March", sort: 3, days: 31, code: 3 },
  { name: "April", sort: 4, days: 30, code: 6 },
  { name: "May", sort: 5, days: 31, code: 1 },
  { name: "June", sort: 6, days: 30, code: 4 },
  { name: "July", sort: 7, days: 31, code: 6 },
  { name: "August", sort: 8, days: 31, code: 2 },
  { name: "September", sort: 9, days: 30, code: 5 },
  { name: "October", sort: 10, days: 31, code: 0 },
  { name: "November", sort: 11, days: 30, code: 3 },
  { name: "December", sort: 12, days: 31, code: 5 },
];

let calendarTable = document.createElement("table");
calendarTable.style.tableLayout = "fixed";

document.body.insertBefore(calendarTable, document.scripts[0]);

const inputYear = prompt("Please enter a valid year");
const inputMonth = prompt("Please enter a valid month");

function centuryCode() {
  let centuryCode = inputYear.slice(0, 2) + "00s";
  let centuryCode1 = centuryCodes.find((o) => o.name === centuryCode);
  centuryCode = centuryCode1.code;
  return centuryCode;
}

function monthCode() {
  let monthCode1 = months.find((o) => o.sort == inputMonth);
  let monthCode = monthCode1.code;
  return monthCode;
}

function yearCode() {
  let yearCode = inputYear.slice(2, 4);
  yearCode = (Math.trunc(yearCode / 4) + yearCode) % 7;
  return yearCode;
}

function leapYear() {
  let leapYear = 0;
  if (Number(inputYear) % 400 == 0) {
    leapYear = 1;
  } else if (Number(inputYear) % 100 == 0) {
    leapYear = 0;
  } else if (Number(inputYear) % 4 == 0) {
    leapYear = 1;
  } else {
    leapYear = 0;
  }
  return leapYear;
}

function calcDay() {
  let calcDay = 0;
  if (leapYear() === 1 && inputMonth < 3) {
    calcDay = (centuryCode() + yearCode() + monthCode() - leapYear()) % 7;
  } else {
    calcDay = (centuryCode() + yearCode() + monthCode() + 1 - leapYear()) % 7;
  }
  let calcDay1 = weekDays.find((o) => o.code == calcDay);
  calcDay = calcDay1.name;
  return calcDay;
}

function createCalendar() {
  let newRow = calendarTable.insertRow(0);
  weekDays.forEach((element) => {
    let dayText = document.createTextNode(element.name);
    let calendarHead = document.createElement("th");
    let newCell = newRow.appendChild(calendarHead);
    newCell.appendChild(dayText);
  });

  let calcDay1 = weekDays.find((o) => o.name == calcDay());
  let calcDay2 = calcDay1.sort;
  let dateCount = 1;
  let monthCode1 = months.find((o) => o.sort == inputMonth);
  if (inputMonth == 2 && leapYear() == 1) {
    monthCode1.days = 29;
  }

  for (i = 1; i < 7; i++) {
    let newRow = calendarTable.insertRow(i);
    for (j = 1; j < 8; j++) {
      if (j < calcDay2 && i === 1) {
        let dayText = document.createTextNode(".");
        let newCell = newRow.insertCell();
        newCell.appendChild(dayText);
      } else if (dateCount <= monthCode1.days) {
        let dayText = document.createTextNode(dateCount);
        let newCell = newRow.insertCell();
        newCell.appendChild(dayText);
        dateCount++;
      }
    }
  }
}

createCalendar();
