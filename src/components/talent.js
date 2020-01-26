import React from 'react';

import model from '../models/talent';
import * as Group from './group';

import './talent.css';

export default class extends React.Component {

  constructor(props){
    super(props);
    this.state = {...(this.props.talent || new model(this.props.segID))};
  }

  descChange = (desc) => {
    this.setState({desc});
    //this.props.onChange(talent);
  }
  nameChange = (name) => {
    this.setState({name});
    //
  }
  activeChange = (active) => {
    this.setState({active});
  }
  learnedChange = (learned) => {
    this.setState({learned});
  }

  render(){
    return (
      <div className="talent flex-column">
        <Group.Container>
          <Group.CheckBlock prepend value={this.state.learned} onChange={this.learnedChange}/>
          <Name value={this.state.name} onChange={this.nameChange}/>
          <Group.CheckBlock value={this.state.active} onChange={this.activeChange}/>
        </Group.Container>
        <Desc value={this.state.desc} onChange={this.descChange}/>
        <div></div>
      </div>
    );
  }
}

const Name = ({value, onChange}) => (
  <input className="form-control" value={value} onChange={(e) => onChange(e.target.value)}/>
);

const Desc = ({value, onChange}) => (
  <div className="flex-grow-1">
    <textarea className="form-control desc" value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);