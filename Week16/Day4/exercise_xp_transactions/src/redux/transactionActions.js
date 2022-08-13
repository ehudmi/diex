export const insertAction = (data) => {
  return {
    type: "INSERT",
    payload: data,
  };
};
export const updateAction = (data) => {
  return {
    type: "UPDATE",
    payload: data,
  };
};
export const deleteAction = (id) => {
  console.log(id);
  console.log("actions.js");
  return {
    type: "DELETE",
    payload: id,
  };
};
export const updateIndexAction = (index) => {
  return {
    type: "UPDATE-INDEX",
    payload: index,
  };
};
