// Daily Challenge: Dates
// Instructions
// Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

// The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second.
// If any of the value has only single digit, you must use zero prefix, so that the result string length is always the same.

// Examples

// formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"

// formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"

// formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"

// Notes
// Assume Date year input will always be greater than 1970.

// Try not to rely on the default Date.toString() output in your implementation.

// Be aware that the Date's month field is zero based (0 is January and 11 is December).

const formatDate = (dateelem) => {
  let theYear = dateelem.getFullYear();
  let theMonth = "";
  let theDay = "";
  let theHour = "";
  let theMinute = "";
  let theSecond = "";

  dateelem.getMonth() < 10
    ? (theMonth = "0" + (dateelem.getMonth() + 1))
    : (theMonth = dateelem.getMonth() + 1);

  dateelem.getDate() < 10
    ? (theDay = "0" + dateelem.getDate())
    : (theDay = dateelem.getDate());

  dateelem.getHours() < 10
    ? (theHour = "0" + dateelem.getHours())
    : (theHour = dateelem.getHours());

  dateelem.getMinutes() < 10
    ? (theMinute = "0" + dateelem.getMinutes())
    : (theMinute = dateelem.getMinutes());

  dateelem.getSeconds() < 10
    ? (theSecond = "0" + dateelem.getSeconds())
    : (theSecond = dateelem.getSeconds());

  console.log(
    `${theYear}${theMonth}${theDay}${theHour}${theMinute}${theSecond}`
  );
};

formatDate(new Date(2020, 6, 4, 8, 0, 0));
formatDate(new Date(2019, 11, 31, 23, 59, 59));
formatDate(new Date(2020, 6, 4));
