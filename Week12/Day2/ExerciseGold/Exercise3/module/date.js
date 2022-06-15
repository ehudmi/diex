// Require the prompt module
var Holidays = require("date-holidays");
var hd = new Holidays("IL");

const nextHoliday = () => {
  let toDay = new Date();
  let holidays2022 = hd.getHolidays(2022);
  holidays2022.find((item) =>
    new Date(item.date).getMonth() > toDay.getMonth()
      ? console.log(item.date)
      : null
  );
  // console.log(hd.getHolidays(2022));
};
module.exports = {
  nextHoliday: nextHoliday,
};
