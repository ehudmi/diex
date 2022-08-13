import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import React, { Component } from "react";
import { deleteAction, updateAction } from "../redux/transactionActions";

class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.list === null) {
      return (
        <div>
          <TransactionForm />
          <h1>TransactionList</h1>
        </div>
      );
    } else {
      // console.log(this.props.list);
      return (
        <div>
          <TransactionForm />
          <h1>TransactionList</h1>
          <table>
            <tbody>
              {/* {console.log(this.props.list)} */}
              {!this.props.list
                ? null
                : this.props.list.map((item, index) => {
                    return (
                      <tr key={index}>
                        {console.log(item, index)}
                        <td>{item.accountNumber}</td>
                        <td>{item.Fsc}</td>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => this.props.updateTransaction(item)}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              console.log(index);
                              this.props.deleteTransaction(index);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { list: state.list, currentIndex: state.currentIndex };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTransaction: (index) => dispatch(deleteAction(index)),
    updateTransaction: (val) => dispatch(updateAction(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
