const insertAction = (data) => {
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
const deleteAction = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
const updateIndexAction = (index) => {
  return {
    type: "UPDATE-INDEX",
    payload: index,
  };
};
export { insertAction, updateAction, deleteAction, updateIndexAction };
