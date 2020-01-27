import React from "react";
import './line.css';

class Line extends React.Component {
  constructor(props){
    super(props);
    this.state={active: props.active || false}
  }

  onClick = () => {
    this.setState({active:!this.state.active});
  }
}

export class HLine extends Line {
  render(){
    return (
      <div className="line d-flex justify-content-center" onClick={this.onClick}>
        <div className={`align-self-center flex-fill hor ${this.state.active ? "active":"no-print"}`}/>
      </div>
    );
  }
}

export class VLine extends Line {
  render(){
    return (
      <div className="line d-flex justify-content-center" onClick={this.onClick}>
        <div className={`align-items-stretch ver ${this.state.active ? "active":"no-print"}`}></div>
      </div>
    );
  }
}