import React from 'react';

import './spec-list.css';

export default ({list = [], onClick = ()=>{}}) => (
  <div className="wb-list no-print">
    <ul>
      {list.map((item, i)=> 
        <Item key={i} 
          name={`${item.career} 
          ${item.spec}`} 
          onClick={()=> onClick(item.id)}
        />
      )}
    </ul>
  </div>
);

const Item = ({name}) => (
  <li>
    {name}
  </li>
)