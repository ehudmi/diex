const getServer = async () => {
  const response = await fetch("http://localhost:3000/shopping");
  const json = await response.json();
  const containerDiv = document.querySelector(".list-container");
  let shoppingList = document.createElement("ol");

  containerDiv.appendChild(shoppingList);
  json.forEach((item) => {
    let listItem = document.createElement("li");
    let listItemText = document.createTextNode(`${item.item} - ${item.amount}`);
    shoppingList.appendChild(listItem);
    listItem.appendChild(listItemText);
  });
};
getServer();
