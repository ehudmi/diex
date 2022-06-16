const getServer = async () => {
  const response = await fetch("http://localhost:3000/");
  const json = response.json;
  console.log(json);
  // console.log("what am i doing?");
};
getServer();
