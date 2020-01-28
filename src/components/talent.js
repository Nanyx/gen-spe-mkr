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
    this.setState({desc}, ()=>this.props.onChange(this.state));
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

  getXPValue = () => {
    switch(this.state.id[0]){
      case 'a': return 5;
      case 'b': return 10;
      case 'c': return 15;
      case 'd': return 20;
      case 'e': return 25;
      default: return;
    }
  }

  render(){
    return (
      <div className="talent flex-column">
        <Group.Container>
          <Name value={this.state.name} onChange={this.nameChange}/>
          <Group.Item className={this.state.isActive?"talent-active active":"talent-active"} onClick={this.activeChange}>
            <Rank isRank={this.state.isRank} onClick={this.rankChange}/>
          </Group.Item>
        </Group.Container>
        <Desc value={this.state.desc} onChange={this.descChange}/>
        <XP value={this.getXPValue()}/>
      </div>
    );
  }
}

const Name = ({value, onChange}) => (
  <input className="form-control title text-uppercase" value={value} onChange={(e) => onChange(e.target.value)}/>
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

const XP = ({value}) => (
  <div className="xp">
    {value} XP
  </div>
);