import React from 'react';
import { Header, ExpenseForm } from './components';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header title="Weekly budget planner" />
      <div className="main-content content">
        <div className="row">
          <div className="one-half column">
            <ExpenseForm>

            </ExpenseForm>
          </div>
          <div className="one-half column"> right </div>
        </div>
      </div>
    </div>
  );
}

export default App;
