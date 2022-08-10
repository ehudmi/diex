import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../redux/actions";

export const TransactionForm = (props) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [fsc, setFsc] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [trn, setTrn] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let transaction = {
      accountNumber: accountNumber,
      fsc: fsc,
      name: name,
      amount: amount,
    };
    setTrn(transaction);
    console.log(accountNumber, fsc, name, amount);
    // console.log("working on it");
  };

  return (
    <div>
      <h1>Financial Transactions:</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="accountNumber"
          placeholder="Account Number"
          type={"text"}
          onChange={(event) => setAccountNumber(event.target.value)}
        />
        <input
          name="Fsc"
          placeholder="FSC"
          type={"text"}
          onChange={(event) => setFsc(event.target.value)}
        />
        <input
          name="name"
          placeholder="A/C Holder Name"
          type={"text"}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          name="amount"
          placeholder="Amount"
          type={"text"}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (trn) => dispatch(addTransaction(trn)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
