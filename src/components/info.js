import React from 'react';

import './info.css';

export default class extends React.Component {
  render(){
    return (
      <div className="info">
        <Career value={this.props.career} onChange={this.props.onChange}/>
        <Specialization value={this.props.spec} onChange={this.props.onChange}/>
        <Skills value={this.props.skills} onChange={this.props.onChange}/>
      </div>
    );
  }
};

const Career = ({value, onChange = (e)=>{}}) => (
  <div>
    <input 
      className="form-control form-control-lg text-uppercase" 
      placeholder="CAREER" value={value} 
      onChange={(e) => onChange("career", e.target.value)}
    />
  </div>
);

const Specialization = ({value, onChange = (e)=>{}}) => (
  <div>
    <input className="form-control form-control-xl text-uppercase" 
      placeholder="SPECIALIZATION" value={value} 
      onChange={(e) => onChange("spec", e.target.value)}
    />
  </div>
)

const Skills = ({value, onChange = (e)=>{}}) => (
  <div className="d-flex">
    <div className="align-self-center text">Spec. Bonus Career Skills:</div>
    <div className="flex-grow-1">
      <input type="text" className="form-control" 
        placeholder="Skill list" value={value} 
        onChange={(e) => onChange("skills", e.target.value)}
      />
    </div>
  </div>
);