import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import EmployeeList from './component/EmployeeList';
import { createStore } from 'react-redux';
import { EmployeeListReducer } from './component/Reducer/EmployeeListReducer';


function App() {   
    const store = createStore(EmployeeListReducer);
  return (
      <div store= {store} className="container">
          <Router>
              <div className="col-md-12">
                  <h1 className="text-center" style={style}></h1>
                      <Route path="/" exact component={EmployeeList} />
                      <Route path="/home" component={Home} />
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
