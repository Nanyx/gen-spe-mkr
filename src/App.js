import React from 'react';

import './App.css';

import * as Menu from './components/menu';
import Info from './components/info';
import Tree from './components/tree';

import Workbook from './models/workbook';
import Spec from './models/spec';

export default class extends React.Component {

  state = {
    workbook:null,
    current:null
  }

  componentDidMount(){
    let workbook = window.localStorage.getItem("workbook");
    if(!workbook){ workbook = new Workbook(); }
    else { workbook = JSON.strignify(workbook); }
    if(workbook.specs.legnth === 0){ workbook.specs.push(new Spec()); }
    this.setState({workbook:workbook});
  }

  addSpec = () => {
    let workbook = this.state.workbook;
    let spec = new Spec();
    workbook.specs.push(spec);
    this.setState({workbook, current: spec.id}, this.save);
  }

  deleteSpec = () => {
    let workbook = this.state.workbook;
    workbook.specs = workbook.specs.filter((s)=> s.id !== this.state.current);
    let current = workbook.specs[0] ? workbook.specs[workbook.specs.length -1].id : null;
    this.setState({workbook, current}, this.save);
  }

  getIndex = () => {
    return this.state.workbook.specs.findIndex((s) => s.id === this.state.current);
  }

  save = () => {
    console.log("save", this.state.workbook);
  }

  infoChange = (info) => {
    let workbook = this.state.workbook;
    workbook.specs[this.getIndex()].info = info;
    this.setState({workbook}, this.save);
  }

  treeChange = (tree) => {
    let workbook = this.state.workbook;
    workbook.tree = tree;
    this.setState({workbook}, this.save);
  }

  render(){
    return (
      <div className="app">
        
        <Menu.Container>
          <Menu.Item icon="fas fa-plus" color="btn-primary" onClick={this.addSpec}/>
          {this.state.current && 
          <Menu.Item icon="fas fa-minus" color="btn-danger" onClick={this.deleteSpec}/>
          }
        </Menu.Container>
        
        <div className="main-container">
          {this.state.current ? (
            <div>
              <Info info={this.state.workbook.info} onChange={this.infoChange} />
              <Tree onChange={this.treeChange} />
            </div>
          ):( <InfoBlock/> )}
        </div>
      </div>  
    );
  }
}

const InfoBlock = () => (
  <div className="d-flex justify-content-center align-items-center create-info">
    <div className="info-box">
      <div>Use the button to create a</div>
      <div>new career or specialization</div>
    </div>
  </div>
);