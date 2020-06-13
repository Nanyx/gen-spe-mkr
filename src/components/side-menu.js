import React from 'react';

import * as Menu from './menu';

export default ({current, wb, loadWb, btnImport, btnExport, add, del}) => (
  <Menu.Container>
    {current && 
    <div>
      <input ref={btnImport} type="file" onChange={(e)=>loadWb(e.target.files[0])} hidden/>
      <a ref={btnExport} 
        href={`data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(wb))}`} 
        download="gen-spe-mkr.gsmwb" style={{display: "none"}}
      ><i/></a>
      <Menu.Item icon="fas fa-file-import" color="btn-primary" onClick={()=>btnImport.current.click()}/>
      <Menu.Item icon="fas fa-file-export" color="btn-primary" onClick={()=>btnExport.current.click()}/>
    </div>
    }
    <Menu.Item icon="fas fa-plus" color="btn-success" onClick={add}/>
    {current && 
    <div>
      <Menu.Item icon="fas fa-minus" color="btn-danger" onClick={del}/>
      <Menu.Item icon="fas fa-print" color="btn-secondary" onClick={() => window.print()}/>
    </div>
    }
  </Menu.Container>
);