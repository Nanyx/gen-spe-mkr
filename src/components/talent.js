import React from 'react';

import * as Group from './group';
import Modal from './modal';

import './talent.css';

export default class extends React.Component {

  save = (prop) => {
    let talent = this.props.talent;
    Object.assign(talent, prop);
    this.props.onChange(talent);
  }

  activeChange = () => {
    this.save({isActive:!this.props.talent.isActive});
  }
  rankChange = (e) => {
    e.stopPropagation();
    this.save({isRank:!this.props.talent.isRank});
  }

  getXPValue = () => {
    switch(this.props.segID[0]){
      case 'a': return 5;
      case 'b': return 10;
      case 'c': return 15;
      case 'd': return 20;
      case 'e': return 25;
      default: return;
    }
  }

  render(){
    return this.props.talent ? (
      <div className="talent flex-column">
        <Group.Container>
          <Name value={this.props.talent.name} onChange={(name) => this.save({name})}/>
          <Group.Item className={this.props.talent.isActive?"talent-active active":"talent-active"} onClick={this.activeChange}>
            <Rank isRank={this.props.talent.isRank} onClick={this.rankChange}/>
          </Group.Item>
        </Group.Container>
        <div className="flex-grow-1">
          <div dangerouslySetInnerHTML={{__html: this.props.talent.desc}} className="form-control desc" onClick={Modal.toggle} />
        </div>      
    {/*<Desc value={this.props.talent.desc} onChange={(desc) => this.save({desc})}/>*/}
        <XP value={this.getXPValue()}/>
      </div>
    ) : ("");
  }
}

const Name = ({value, onChange}) => (
  <input className="form-control title text-uppercase" value={value} onChange={(e) => onChange(e.target.value)}/>
);

const Desc = ({value, onChange}) => (
  <div className="flex-grow-1">
    <div contentEditable dangerouslySetInnerHTML={{__html: value}} className="form-control desc" onChange={(e) => onChange(e.target.value)} />
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
