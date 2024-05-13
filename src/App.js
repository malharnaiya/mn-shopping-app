import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import './App.css';

function App() {
  return (
      <AppProvider>
        <div className="App">
            <h4 className="align-left"> Shopping App </h4>
            
            <div className="row">
                <div className="col-sm">
                    <CartValue/>
                </div>
                <div className="col-sm">
                    <Location/>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm">
                    <h5 className="align-left"> Shopping Cart </h5>
                    <ExpenseList/>
                </div>
            </div>

            <div className="row">
                <div className="col-sm">
                    <h5 className="align-left"> Add Items </h5>
                    <ItemSelected/>
                </div>
            </div>
        </div>
    </AppProvider>
  );
}

export default App;