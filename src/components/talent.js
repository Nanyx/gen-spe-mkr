import React from 'react';

import model from '../models/talent';

import './talent.css';

export default class extends React.Component {

  constructor(props){
    super(props);
    let init = this.props.talent || new model(this.props.segID);

    init.name=this.props.segID;
    this.state = {...init};
    console.log(this.state);
  }

  descChange = (desc) => {
    this.setState({desc});
    //this.props.onChange(talent);
  }

  render(){
    return (
      <div className="talent">
        laskjdflaksdf
        <div>{this.state.name}</div>
        <Desc value={this.state.desc} onChange={this.descChange}/>
      </div>
    );
  }
}

const Desc = (value, onChange) => (
  <textarea className="form-control" value={value} onChange={(e) => onChange(e.target.value)} />
);