import React from 'react';
import Grid from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Talent from './talent';
import * as Line from './line';

import objTalent from '../models/talent';
import layout from '../models/tree.json';

export default class extends React.Component { 

  lineChange = (line) => {
    let lines = this.props.lines;
    let index = lines.findIndex(l => l.id === line.id);
    if(index === -1){ lines.push(line); }
    else { lines[index] = line; }
    this.save(null, lines);
  }
  talentChange = (talent) => {
    let talents = this.props.talents;
    let index = talents.findIndex(t=> t.id === talent.id);
    if(index === -1){ talents.push(talent); }
    else { talents[index] = talent; }
    this.props.onChange("talents", talents);
    this.save(talents, null);
  }

  save = (talents, lines) => {
    talents = talents || this.props.talents;
    lines = lines || this.props.lines;
    this.props.onChange({lines, talents});
  }

  lineIsActive = (id) => {
    let line = this.props.lines.find((l)=> l.id === id);
    if(!line){return false;}
    return line.active;
  }
  getTalent = (id) => {
    let talent = this.props.talents.find((t)=> t.id === id);
    return talent ? talent : new objTalent(id);
  }

  render(){
    return (
      <Grid className="layout" layout={layout} cols={15} rowHeight={80} width={1200} margin={[0,0]}>
        {layout.map(segment => {
          return (
            <div key={segment.i}>
              {segment.i.split("-")[0].length === 1 ? (
                <Talent segID={segment.i} talent={this.getTalent(segment.i)} onChange={this.talentChange}/>
              ):(
                segment.i[0] === segment.i[3] ? (
                  <Line.HLine segID={segment.i} active={this.lineIsActive(segment.i)} onChange={this.lineChange}/>
                ):(
                  <Line.VLine segID={segment.i} active={this.lineIsActive(segment.i)} onChange={this.lineChange}/>
                )
              )}
            </div>
          );
        })}
      </Grid>
    );
  }
}