import React from 'react';

export const Container = ({children}) => (
  <div className="input-group">
    {children}
  </div>
);

export const CheckBlock = ({value, prepend, onChange}) => (
  <div className={`input-group-${prepend? "prepend":"append"}`}>
    <div className="input-group-text">
      <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)}/>
    </div>
  </div>
);