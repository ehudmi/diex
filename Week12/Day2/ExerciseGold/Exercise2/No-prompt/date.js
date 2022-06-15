const timeLived = () => {
  let birtDate = new Date("03/12/1966").getTime();
  let toDay = new Date().getTime();
  let minutes = Math.floor((toDay - birtDate) / 1000 / 60);

  console.log(`You have been alive for ${minutes} minutes since birth`);
};

module.exports = {
  timeLived: timeLived,
};
