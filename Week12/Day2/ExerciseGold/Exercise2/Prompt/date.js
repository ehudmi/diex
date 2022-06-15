// Require the prompt module
const prompt = require(`prompt`);

const timeLived = async () => {
  prompt.start();

  const birthdate = await prompt.get(["birthdate"]);

  let userBirthDate = new Date(birthdate.birthdate).getTime();
  let toDay = new Date().getTime();
  let minutes = Math.floor((toDay - userBirthDate) / 1000 / 60);
  console.log(`You have been alive for ${minutes} minutes since birth`);
};

module.exports = {
  timeLived: timeLived,
};
