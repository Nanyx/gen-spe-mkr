import React from 'react';

import './App.css';

import Info from './components/info';
import Tree from './components/tree';

export default class extends React.Component {

  componentDidMount(){
    
  }

  render(){
    return (
      <div className="app">
        <div className="main-container">
          <Info/>
          <Tree/>
        </div>
      </div>  
    );
  }
}
