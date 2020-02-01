import React from 'react';

import './spec-list.css';

export default ({list = [], onClick = ()=>{}}) => (
  <div className="wb-list no-print">
    <ul>
      {list.map((item, i)=> 
        <Item key={i} 
          name={`${item.career} ${item.spec}`}
          id={item.id}
          onClick={onClick}
        />
      )}
    </ul>
  </div>
);

const Item = ({name, id, onClick}) => (
  <li>
    <button type="button" className="btn btn-secondary btn-sm" onClick={()=> onClick(id)}>
      {name.replace(/\s/g, "").length === 0 ? (<i>not defined</i>) : name}
    </button>
  </li>
)