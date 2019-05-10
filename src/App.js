import React, { Component } from 'react';
import { Header, ExpenseForm } from './components';
import './css/App.css';

class App extends Component{
  state = {
    budget:   '',
    pending:  '',
    expenses: {}
  }

  addExpense = expense=>{
    const expenses = {...this.state.expenses};

    console.log( 'expense added: ', expense );
    console.log( );
  }

  render (){
    return (
        <div className="App">
        <Header title="Weekly budget planner" />
        <div className="main-content content">
          <div className="row">
            <div className="one-half column">
              <ExpenseForm addExpense={ this.addExpense }>

              </ExpenseForm>
            </div>
            <div className="one-half column"> right </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
