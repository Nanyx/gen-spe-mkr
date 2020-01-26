import React from "react";
import './line.css';

export const HLine = () => (
  <div className="line d-flex justify-content-center">
    <div className="align-self-center flex-fill hor"/>
  </div>
);

export const VLine = () => (
  <div className="line d-flex justify-content-center">
    <div className="align-items-stretch ver"></div>
  </div>
);