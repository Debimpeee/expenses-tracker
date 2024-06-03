import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setText('');
    setAmount('');
  };

  function updateText(event) {
    setText(event.target.value);
  }

  function updateAmount(event) {
    setAmount(event.target.value);
  }

  function clearAmountInput() {
    setAmount('');
  }

  return (
    <div>
      <h3>New Expenses</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={updateText} placeholder="Enter text..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <br/>
          <span>(- expenses, + income)</span>
          <input
            type="number"
            value={amount}
            onChange={updateAmount}
            onClick={clearAmountInput}
            placeholder="Enter amount..."
          />
        </div>

        <button className="btn">Add Expense</button>
      </form>
    </div>
  );
};

export default AddTransaction;
