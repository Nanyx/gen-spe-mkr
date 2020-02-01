import React from "react";
import './line.css';

class Line extends React.Component {
  onClick = () => {
    this.props.onChange({id:this.props.segID, active:!this.props.active});
  }
}

export class HLine extends Line {
  render(){
    return (
      <div className="line d-flex justify-content-center" onClick={this.onClick}>
        <div className={`align-self-center flex-fill hor ${this.props.active ? "active":"no-print"}`}/>
      </div>
    );
  }
}

export class VLine extends Line {
  render(){
    return (
      <div className="line d-flex justify-content-center" onClick={this.onClick}>
        <div className={`align-items-stretch ver ${this.props.active ? "active":"no-print"}`}></div>
      </div>
    );
  }
}