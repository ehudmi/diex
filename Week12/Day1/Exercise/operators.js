const addOperator = (x, y) => {
  console.log(x + y);
};

const divideOperator = (x, y) => {
  console.log(x / y);
};

module.exports = {
  plusAction: addOperator,
  divideAction: divideOperator,
};
