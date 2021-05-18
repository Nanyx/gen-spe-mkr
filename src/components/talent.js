import {Card, InputGroup, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/pro-light-svg-icons';

import "./talent.css";

const Talent = ({segID, talent, onChange}) => {

  const changeName = (name) => {
    talent.name = name;
    onChange(talent);
  }

  const getXPValue = () => {
    switch(segID[0]){
      case 'a': return 5;
      case 'b': return 10;
      case 'c': return 15;
      case 'd': return 20;
      case 'e': return 25;
      default: return;
    }
  }

  const activeChange = (e) => {
    e.stopPropagation();
    talent.isActive = !talent.isActive;
    onChange(talent);
  }

  const rankChange = (e) => {
    e.stopPropagation();
    talent.isRank = !talent.isRank;
    onChange(talent);
  }

  return (
    <Card className="talent">
      <InputGroup>
        <FormControl as="input" value={talent.name} onChange={e => changeName(e.target.value)}/>
        <InputGroup.Append>
          <InputGroup.Text className={talent.isActive?"talent-active active":"talent-active"} onClick={activeChange}>
            <Rank isRank={talent.isRank} onClick={rankChange}/>
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>

      <div className="flex-grow-1">
        {/*<div dangerouslySetInnerHTML={{__html: this.props.talent.desc}} className="form-control desc" onClick={Modal.toggle} />*/}
      </div>      
      {/*<Desc value={this.props.talent.desc} onChange={(desc) => this.save({desc})}/>*/}
      <XP value={getXPValue()}/>
    </Card>
  );
}

const Rank = ({isRank, onClick}) => (
  <div onClick={onClick}>
    {isRank ? (
      <div className="rank">
        <FontAwesomeIcon icon={faSquare} rotation={45} style={{marginRight: "-10px"}}/>
        <FontAwesomeIcon icon={faSquare} rotation={45}/>
      </div>
    ):(
      <FontAwesomeIcon icon={faSquare} rotation={45} style={{margin:"0 2px"}}/>
    )}
  </div>
);

const XP = ({value}) => (
  <div className="xp">
    {value} XP
  </div>
);

export default Talent;