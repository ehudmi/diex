const casual = require("casual");
const prompt = require("prompt");

const users = [];
const addNewUSers = () => {
  // let name = faker.name.findName();
  // console.log(name);
  users.push({
    name: casual.full_name,
    address_street: casual.street,
    country: casual.country,
  });
};
const addCurrent = async () => {
  prompt.start();

  let name = await prompt.get(["name"]);
  let address_street = await prompt.get(["address_street"]);
  let country = await prompt.get(["country"]);
  users.push({
    name: name,
    address_street: address_street,
    country: country,
  });
  console.log(users);
};

addNewUSers();
addCurrent();
