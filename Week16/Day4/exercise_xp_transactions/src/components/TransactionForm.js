// import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { insertAction, updateAction } from "../actions/transactionActions";

import React, { Component } from "react";

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    if (props.currentIndex === -1) {
      this.state = { accountNumber: "", Fsc: "", name: "", amount: "" };
    } else {
      this.state = { ...props };
    }
  }
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(`did ${event.target.value}`);
    // console.log(this.state.accountNumber);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.insertTransaction(this.state);
    // console.log("working on it");
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
  return bindActionCreators(
    {
      insertTransaction: insertAction,
      updateTransaction: updateAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
