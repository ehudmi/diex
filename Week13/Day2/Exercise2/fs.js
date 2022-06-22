const fs = require("fs");

fs.writeFile("./data.txt", `Some Text To See`, (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("write operation complete");
  }
});

fs.appendFile("./data.txt", `\nMore text to see`, (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("append operation complete");
  }
});
const deleteFile = () => {
  setTimeout(() => {
    fs.unlink("./data.txt", (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log("delete operation complete");
      }
    });
  }, 3000);
};
deleteFile();
