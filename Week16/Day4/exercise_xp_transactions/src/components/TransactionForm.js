// import React from "react";
import { connect } from "react-redux";
import { insertAction, updateAction } from "../redux/transactionActions";
import React, { Component } from "react";

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { accountNumber: "", Fsc: "", name: "", amount: "" };
  }
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    this.props.insertTransaction(this.state);
    localStorage.setItem("transactions", JSON.stringify(this.state));
  };

  render() {
    return (
      <div>
        <h1>Financial Transactions:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="accountNumber"
            placeholder="Account Number"
            type={"text"}
            onChange={this.handleInputChange}
          />
          <input
            name="Fsc"
            placeholder="FSC"
            type={"text"}
            onChange={this.handleInputChange}
          />
          <input
            name="name"
            placeholder="A/C Holder Name"
            type={"text"}
            onChange={this.handleInputChange}
          />
          <input
            name="amount"
            placeholder="Amount"
            type={"text"}
            onChange={this.handleInputChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { list: state.list, currentIndex: state.currentIndex };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertTransaction: (val) => dispatch(insertAction(val)),
    updateTransaction: (val) => dispatch(updateAction(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
