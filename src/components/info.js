import React from 'react';

import './info.css';

import Info from '../models/info';

export default class extends React.Component {
  state={...(this.props.info || new Info())}

  careerChange = (career) => {
    this.setState({career});
  }
  specChange = (spec) => {
    this.setState({spec});
  }
  skillsChange = (skills) => {
    this.setState({skills});
  }

  render(){
    return (
      <div className="info">
        <Career value={this.state.career} onChange={this.careerChange}/>
        <Specialization value={this.state.spec} onChange={this.specChange}/>
        <Skills value={this.state.skills} onChange={this.skillsChange}/>
      </div>
    );
  }
};

const Career = ({value, onChange = (e)=>{}}) => (
  <div>
    <input 
      className="form-control form-control-lg text-uppercase" 
      placeholder="CAREER" value={value} 
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Specialization = ({value, onChange = (e)=>{}}) => (
  <div>
    <input className="form-control form-control-xl text-uppercase" 
      placeholder="SPECIALIZATION" value={value} 
      onChange={(e)=>onChange(e.target.value)}
    />
  </div>
)

const Skills = ({value, onChange = (e)=>{}}) => (
  <div className="d-flex">
    <div className="align-self-center text">Spec. Bonus Career Skills:</div>
    <div className="flex-grow-1">
      <input type="text" className="form-control" 
        placeholder="Skill list" value={value} 
        onChange={(e)=>onChange(e.target.value)}
      />
    </div>
  </div>
);