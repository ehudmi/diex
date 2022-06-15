// Require the prompt module
const Holidays = require("date-holidays");
const hd = new Holidays("IL");

const nextHoliday = () => {
  let toDay = new Date();
  let holidays2022 = hd.getHolidays(2022);
  holidays2022.find((item) =>
    new Date(item.start) < toDay ? console.log(item.date) : console.log(`null`)
  );
};
module.exports = {
  nextHoliday: nextHoliday,
};
