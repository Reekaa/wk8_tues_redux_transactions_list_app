import React from 'react';
import { connect } from 'react-redux';

const Transaction = (props) => {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.input.value;
    props.add_transaction(value);
  }

  const render = () => {
    return props.transactions.map((transaction, index) => {
      return <li key={index}>{transaction}</li>;
    })
  }

  const calcTotal = () => {
    return props.transactions.reduce((total, currentValue) => {
      return total + parseInt(currentValue);
    }, 0)
  }

  return (
    <>
      <h1>Transactions</h1>
      <form id='transaction-form' onSubmit={handleFormSubmit}>
        <label htmlFor='transaction'>Enter a transaction
        <input type='number' name='transaction' placeholder='amount' id='input' />
        </label>
        <input type='submit' value='Add to list' />
      </form>
      <h1>Transactions list</h1>
      <button onClick={props.clear_list}>Clear list</button>
      <ul id='transactions-list'>{render()}</ul>
      <p>Total: {calcTotal()}</p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    transactions: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_transaction: (value) => {
      dispatch({
        type: 'ADD_TRANSACTION',
        value: value
       })
    },
    clear_list: () => {
      dispatch({
        type: 'CLEAR_LIST'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
