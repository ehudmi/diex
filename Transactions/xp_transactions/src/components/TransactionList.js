import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { deleteAction, updateIndexAction } from "../actions/transactionActions";

class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleEdit = (index) => {
    // console.log(index);
    this.props.updateIndexTransaction(index);
  };

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
              {/* {console.log(this.props)} */}
              {this.props.list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.accountNumber}</td>
                    <td>{item.Fsc}</td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => this.handleEdit(index)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={(index) => this.props.deleteTransaction(index)}
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
    deleteTransaction: (event) => dispatch(deleteAction(event)),
  };
  // return bindActionCreators(
  //   {
  //     deleteTransaction:()=>dispatch (deleteAction),
  //     updateIndexTransaction: updateIndexAction,
  //   },
  //   dispatch
  // );
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
