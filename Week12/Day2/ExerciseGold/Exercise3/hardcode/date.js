const datetimeDifference = require("datetime-difference");

const nextHoliday = () => {
  let result = datetimeDifference(new Date(), new Date("07/17/2022"));
  const timeToHoliday = Object.keys(result)
    .filter((k) => !!result[k])
    .map((k) => `${result[k]} ${k}`)
    .join(", ");

  console.log(`next holiday is in ${timeToHoliday} from today`);
};

module.exports = {
  nextHoliday: nextHoliday,
};
