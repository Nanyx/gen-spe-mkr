import { useState } from 'react';
import {Card, InputGroup, FormControl, Modal, Button, ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faDiceD6, faDiceD8, faDiceD12 } from '@fortawesome/pro-light-svg-icons';
import { faDiceD6 as d6, faDiceD8 as d8, faDiceD12 as d12 } from '@fortawesome/pro-solid-svg-icons';

import rsr from 'react-string-replace';

import "./talent.css";

const Talent = ({segID, talent, onChange}) => {
  const [show, open] = useState(false);

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

  const descChange = (text) => {
    talent.desc = text;
    onChange(talent);
  }

  const formater = () => {
    let ret = rsr(talent.desc, "[[bd6]]", (match, i) => <FontAwesomeIcon key={`bd6-${i}`} className="text-info" icon={d6}/>)
    ret = rsr(ret, "[[nd6]]", (match, i) => <FontAwesomeIcon key={`nd6-${i}`} className="text-dark" icon={d6}/>)
    ret = rsr(ret, "[[bd8]]", (match, i) => <FontAwesomeIcon key={`bd8-${i}`} className="text-success" icon={d8}/>)
    ret = rsr(ret, "[[nd8]]", (match, i) => <FontAwesomeIcon key={`nd8-${i}`} className="text-purple" icon={d8}/>)
    ret = rsr(ret, "[[bd12]]", (match, i) => <FontAwesomeIcon key={`bd12-${i}`} className="text-warning" icon={d12}/>)
    ret = rsr(ret, "[[nd12]]", (match, i) => <FontAwesomeIcon key={`nd12-${i}`} className="text-danger" icon={d12}/>)
    return ret;
  }

  return (
    <Card className="talent">
      <Card.Header style={{padding:"0"}}>
        <InputGroup>
          <FormControl as="input" value={talent.name} onChange={e => changeName(e.target.value)}/>
          <InputGroup.Append>
            <InputGroup.Text className={talent.isActive?"talent-active active":"talent-active"} onClick={activeChange}>
              <Rank isRank={talent.isRank} onClick={rankChange}/>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Card.Header>
      <Card.Body style={{padding:"0", paddingTop:"5px"}}>
        <div className="gsm-desc" onClick={() => open(true)}>{formater()}</div>
      </Card.Body>
      <XP value={getXPValue()}/>
      <TalentModal show={show} desc={talent.desc} onChange={descChange} close={() => open(false)}/>
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

const TalentModal = ({show, desc, onChange, close}) => {

  const addDice = (dice, isBenevolant = true) => {
    onChange(`${desc}[[${isBenevolant?"b":"n"}d${dice}]]`)
  }

  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header>
        <ButtonGroup>
          <Button variant="info" onClick={() => addDice(6)}><FontAwesomeIcon icon={faDiceD6}/></Button>
          <Button variant="dark" onClick={() => addDice(6, false)}><FontAwesomeIcon icon={faDiceD6}/></Button>
          <Button variant="success" onClick={() => addDice(8)}><FontAwesomeIcon icon={faDiceD8}/></Button>
          <Button className="gsm-purple" onClick={() => addDice(8, false)}><FontAwesomeIcon icon={faDiceD8}/></Button>
          <Button variant="warning" onClick={() => addDice(12)}><FontAwesomeIcon icon={faDiceD12}/></Button>
          <Button variant="danger" onClick={() => addDice(12, false)}><FontAwesomeIcon icon={faDiceD12}/></Button>
          {/*<Button variant="outline-secondary"><FontAwesomeIcon icon={faDiceD12}/></Button>*/}
        </ButtonGroup>
      </Modal.Header>
      <Modal.Body>
        <FormControl as="textarea" rows={6} value={desc} onChange={e => onChange(e.target.value)}/>
      </Modal.Body>
    </Modal>
);
}

export default Talent;