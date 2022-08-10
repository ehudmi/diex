const insertAction = (data) => {
  // console.log("I'm in action", data);
  return {
    type: "INSERT",
    payload: data,
  };
};
const updateAction = (data) => {
  return {
    type: "UPDATE",
    payload: data,
  };
};
const deleteAction = (index) => {
  console.log(index);
  console.log("actions.js");
  return {
    type: "DELETE",
    payload: index,
  };
};
const updateIndexAction = (index) => {
  return {
    type: "UPDATE-INDEX",
    payload: index,
  };
};
export { insertAction, updateAction, deleteAction, updateIndexAction };
