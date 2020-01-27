import React from 'react';

export const Container = ({children}) => (
  <div className="input-group">
    {children}
  </div>
);

export const Item = ({className, children, prepend, onClick}) => (
  <div className={`input-group-${prepend? "prepend":"append"}`}>
    <div className={`input-group-text ${className}`} onClick={onClick}>
      {children}
    </div>
  </div>
);