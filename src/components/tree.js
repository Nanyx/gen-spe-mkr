import Grid from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Talent from './talent';
import Line from './line';

import objTalent from '../models/talent';
import layout from '../data/tree.json';

const Tree = ({lines, talents, onChange}) => {

  const lineChange = (line) => {
    let index = lines.findIndex(l => l.id === line.id);
    if(index === -1){ lines.push(line); }
    else { lines[index] = line; }
    onChange({talents, lines});
  }

  const talentChange = (talent) => {
    console.log(talent);
    let index = talents.findIndex(t=> t.id === talent.id);
    if(index === -1){ talents.push(talent); }
    else { talents[index] = talent; }
    onChange({talents, lines});
  }

  const getTalent = (id) => {
    let talent = talents.find((t)=> t.id === id);
    return talent ? talent : new objTalent(id);
  };
  const lineIsActive = (id) => {
    let line = lines.find((l)=> l.id === id);
    if(!line){ return false; }
    return line.active;
  };
  
  return (
    <Grid className="layout" layout={layout} cols={15} rowHeight={80} width={1110} margin={[0,0]}>
      {layout.map(segment => {
        return (
          <div key={segment.i}>
            {segment.i.split("-")[0].length === 1 ? (
              <Talent segID={segment.i} talent={getTalent(segment.i)} onChange={talentChange}/>
            ):(
              segment.i[0] === segment.i[3] ? (
                <Line segID={segment.i} isActive={lineIsActive(segment.i)} onClick={lineChange}/>
              ):(
                <Line segID={segment.i} isV isActive={lineIsActive(segment.i)} onClick={lineChange}/>
              )
            )}
          </div>
        );
      })}
    </Grid>
  );
}

export default Tree;