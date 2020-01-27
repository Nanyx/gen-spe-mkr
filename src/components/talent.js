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
  activeChange = () => {
    this.setState({isActive:!this.state.isActive});
  }
  rankChange = (e) => {
    e.stopPropagation();
    this.setState({isRank:!this.state.isRank});
  }

  render(){
    console.log(this.state);
    return (
      <div className="talent flex-column">
        <Group.Container>
          <Name value={this.state.name} onChange={this.nameChange}/>
          <Group.Item className={this.state.isActive?"talent-active active":"talent-active"} onClick={this.activeChange}>
            <Rank isRank={this.state.isRank} onClick={this.rankChange}/>
          </Group.Item>
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

const Rank = ({isRank, onClick}) => (
  <div onClick={onClick}>
    {isRank ? (
      <div className="rank">
        <i className="far fa-square fa-rotate-45"/>
        <i className="far fa-square fa-rotate-45"/>
      </div>
    ):(
      <i className="far fa-square fa-rotate-45"/>
    )}
  </div>
);