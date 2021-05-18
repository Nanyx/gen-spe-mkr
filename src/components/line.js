import "./line.css";

import objLine from '../models/line';

const Line = ({segID, isActive, isV, onClick}) => (
  <div className="line d-flex justify-content-center" onClick={() => onClick(new objLine(segID, !isActive))}>
    {isV ? (
      <div className={`align-items-stretch ver ${isActive ? "active":"no-print"}`}/>
    ):(
      <div className={`align-self-center flex-fill hor ${isActive ? "active":"no-print"}`}/>
    )}
  </div>
);

export default Line;