import React from 'react';

import './info.css';

import Info from '../models/info';

export default class extends React.Component {
  state={...(this.props.info || new Info())}

  careerChange = (career) => {
    this.setState({career});
  }

  render(){
    return (
      <div className="info">
        <Career value={this.state.career} onChange={this.careerChange}/>
        <Specialization/>
        <Skills/>
      </div>
    );
  }
};

const Career = ({value, onChange = (e)=>{}}) => (
  <div>
    <input 
      className="form-control form-control-lg" 
      placeholder="CAREER" value={value} 
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Specialization = () => (
  <div>
    <input className="form-control form-control-xl" placeholder="SPECIALIZATION"/>
  </div>
)

const Skills = () => (
  <div className="d-flex">
    <div className="align-self-center text">Spec. Bonus Career Skills:</div>
    <div className="flex-grow-1">
      <input type="text" className="form-control" placeholder="Skill list"/>
    </div>
  </div>
);