import React, { Component } from 'react';

export class ExpenseForm extends Component {

  render () {

    return (
      <form>
        <h2>Add your expenses here</h2>
        <div className="field">
            <label>Expense name</label>
            <input className="u-full-width" type="text" placeholder="Ex. Gas" />
        </div>

        <div className="field">
            <label>Amount</label>
            <input className="u-full-width" type="text" placeholder="Ej. 300" />
        </div>

        <input className="button-primary u-full-width" type="submit" value="Add" />
      </form>
    );
  }

};
