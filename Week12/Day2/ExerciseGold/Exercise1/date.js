const timeLeft = () => {
  let newYear = new Date("December 31, 2022 23:59:59");
  let toDay = new Date();
  let months = newYear.getMonth() - toDay.getMonth();
  let days = newYear.getDate() - toDay.getDate();
  let hours = newYear.getHours() - toDay.getHours();
  let minutes = newYear.getMinutes() - toDay.getMinutes();
  let seconds = newYear.getSeconds() - toDay.getSeconds();
  console.log(
    `the 1st January is in ${months} months, ${days} days and ${hours}:${minutes}:${
      seconds + 1
    } hours`
  );
};

module.exports = {
  timeLeft: timeLeft,
};
