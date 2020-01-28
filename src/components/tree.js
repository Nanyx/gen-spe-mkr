import React from 'react';
import Grid from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Talent from './talent';
import * as Line from './line';

import layout from '../models/tree.json';

export default () => (
  <Grid className="layout" layout={layout} cols={15} rowHeight={80} width={1200} margin={[0,0]}>
    {layout.map(segment => {
      return (
        <div key={segment.i}>
          {segment.i.split("-")[0].length === 1 ? (
            <Talent segID={segment.i} onChange={()=>{}/*this.props.treeChange*/}/>
          ):(
            segment.i[0] === segment.i[3] ? (
              <Line.HLine/>
            ):(
              <Line.VLine/>
            )
          )}
        </div>
      );
    })}
  </Grid>
);