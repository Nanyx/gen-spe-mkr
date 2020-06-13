import React from 'react';

import './App.css';

import * as Menu from './components/menu';
import SpecList from './components/spec-list';
import Modal from './components/modal';
import Info from './components/info';
import Tree from './components/tree';

import Workbook from './models/workbook';
import Spec from './models/spec';

export default class extends React.Component {
  state = { workbook:null, current:null }
  exportRef = React.createRef();
  importRef = React.createRef();

  componentDidMount(){
    let workbook = window.localStorage.getItem("workbook");
    if(workbook){
      try {
        workbook = JSON.parse(workbook);
        let lng = workbook.specs.length
        if(lng > 0){
          let last = workbook.specs[lng-1].id;
          this.setState({workbook:workbook, current:last});
        }
      } catch (e){ console.error(e); }
    }
  }

  /**
   * @param {Blob} file
   */
  loadWorkbook = (file) => {
    file.text().then(workbook => {
      try {
        workbook = Object.assign(new Workbook(), JSON.parse(workbook));
        let current = workbook.specs[0] ? workbook.specs[workbook.specs.length -1].id : null;
        this.setState({workbook, current});
      } catch (e) { console.error(e); }
    });
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

  getIndex = () => this.state.workbook.specs.findIndex((s) => s.id === this.state.current);

  save = () => {
    window.localStorage.setItem("workbook", JSON.stringify(this.state.workbook));
  }

  infoChange = (tag, value) => {
    let workbook = this.state.workbook;
    workbook.specs[this.getIndex()].info[tag] = value;
    this.setState({workbook}, this.save);
  }

  treeChange = (tree) => {
    let workbook = this.state.workbook;
    workbook.specs[this.getIndex()].tree = tree;
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
          {this.state.current && 
          <div>
            <input ref={this.importRef} type="file" onChange={(e)=>this.loadWorkbook(e.target.files[0])} hidden/>
            <a ref={this.exportRef} 
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(this.state.workbook))}`} 
              download="gen-spe-mkr.gsmwb" style={{display: "none"}}
            ><i/></a>
            <Menu.Item icon="fas fa-file-import" color="btn-primary" onClick={()=>this.importRef.current.click()}/>
            <Menu.Item icon="fas fa-file-export" color="btn-primary" onClick={()=>this.exportRef.current.click()}/>
          </div>
          }
          <Menu.Item icon="fas fa-plus" color="btn-success" onClick={this.addSpec}/>
          {this.state.current && 
          <div>
            <Menu.Item icon="fas fa-minus" color="btn-danger" onClick={this.deleteSpec}/>
            <Menu.Item icon="fas fa-print" color="btn-secondary" onClick={() => window.print()}/>
          </div>
          }
        </Menu.Container>
        <div className="main-container">
          {this.state.current ? (
            <div>
              <Info {...spec.info} onChange={this.infoChange}/>
              <Tree {...spec.tree} onChange={this.treeChange}/>
            </div>
          ):(<InfoBlock/>)}
        </div>
        <Modal.Modal/>
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