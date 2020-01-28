import React from 'react';

import './App.css';

import * as Menu from './components/menu';
import SpecList from './components/spec-list';
import Info from './components/info';
import Tree from './components/tree';

import Workbook from './models/workbook';
import Spec from './models/spec';

export default class extends React.Component {
  state = { workbook:null, current:null }

  componentDidMount(){
    let workbook = window.localStorage.getItem("workbook");
    try {
      workbook = JSON.parse(workbook);
      let last = workbook.specs[workbook.specs.length-1].id;
      this.setState({workbook:workbook, current:last});
    } catch {}
  }

  addSpec = () => {
    let workbook = this.state.workbook;
    if(!workbook){ 
      workbook = new Workbook();
    }
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

  getIndex = () => this.state.workbook.specs.findIndex((s) => s.id === this.state.current)

  save = () => {
    window.localStorage.setItem("workbook", JSON.stringify(this.state.workbook));
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
    let spec;
    if(this.state.current){spec = this.state.workbook.specs[this.getIndex()];}
    return (
      <div className="app">
        {this.state.workbook && 
          <SpecList 
            list={this.state.workbook.specs.map(s=> {return {id:s.id, ...s.info};})}
            onClick={(current) => this.setState({current})}
          />
        }
        <Menu.Container>
          <Menu.Item icon="fas fa-plus" color="btn-primary" onClick={this.addSpec}/>
          {this.state.current && 
          <Menu.Item icon="fas fa-minus" color="btn-danger" onClick={this.deleteSpec}/>
          }
        </Menu.Container>
        <div className="main-container">
          {this.state.current ? (
            <div>
              <Info info={spec.info} onChange={this.infoChange}/>
              <Tree tree={spec.tree} onChange={this.treeChange}/>
            </div>
          ):(<InfoBlock/>)}
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