import React, { Component } from 'react';

export class ExpenseForm extends Component {

  // Form fields refs
  nameExpenseREF   = React.createRef();
  amountExpenseREF = React.createRef();

  createExpense = (event)=>{
    // First prevent onSubmit default
    event.preventDefault();

    // Create data {nameExpense, amountExpense}
    const expense = {
      nameExpense: this.nameExpenseREF.current.value,
      amountExpense: this.amountExpenseREF.current.value
    }

    console.log( 'New expense: ', expense );

    // We might reset the Form
    event.currentTarget.reset();
  }

  render () {


    return (
      <form onSubmit={ this.createExpense }>
        <h2>Add your expenses here</h2>
        <div className="field">
            <label>Expense name</label>
            <input ref={ this.nameExpenseREF } className="u-full-width" type="text" placeholder="Ex. Gas" />
        </div>

        <div className="field">
            <label>Amount</label>
            <input ref={ this.amountExpenseREF } className="u-full-width" type="text" placeholder="Ej. 300" />
        </div>

        <input className="button-primary u-full-width" type="submit" value="Add" />
      </form>
    );
  }

};
