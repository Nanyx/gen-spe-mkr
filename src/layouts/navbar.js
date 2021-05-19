import {useState, useEffect, createRef} from 'react';
import {Navbar, Nav, Form, Button, Modal} from 'react-bootstrap';
import * as ls from 'local-storage';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faPlus, faUpload, faDownload} from '@fortawesome/pro-light-svg-icons';

import spec from "../models/spec";

const MainNav = ({wb, setWB}) => {
  const importRef = createRef();
  const [deleteWB, setDelete] = useState(false);
  const [newSpec, setNewSpec] = useState(false);

  useEffect(() => { 
    if(wb.specs.length === 0){ setNewSpec(true); } 
  }, [wb]);
  
  const loadWb = (val) => {
    try { 
      setWB(JSON.parse(val));
    } catch { console.error("bad workbook"); }
  }

  const specChange = (id) => {
    wb.current = id;
    setWB({...wb});
  }

  const addSpec = (spec) => {
    wb.specs.push(spec);
    wb.current = spec.id;
    setWB({...wb});
    setNewSpec(false);
  }

  const removeSpec = (id) => {
    wb.specs = wb.specs.filter(s => s.id !== id);
    setWB({...wb});
    specChange(wb.specs[0]?.id);
  }

  const getOptName = (info) => {
    return `${info.career.length > 0? `${info.career} - `:""}${info.spec}`;
  }

  let specs = wb.specs;
  specs.sort((a, b) => a.name < b.name ? -1 : 1);

  return (
    <Navbar className="gsm-nav" bg="dark" fixed="top">
      <Navbar.Brand>Genesys Specialisation Maker : {wb.name}</Navbar.Brand>
      <Nav className="mr-auto">
          <Form inline>
            {wb.current &&
              <Form.Control as="select" value={wb.current} onChange={(e) => specChange(parseInt(e.target.value,10))}>
                {specs.map(s => <option key={s.id} value={s.id}>{getOptName(s.info)}</option>)}
              </Form.Control>
            }
            <Button variant="danger" onClick={() => removeSpec(wb.current)}><FontAwesomeIcon icon={faTrashAlt}/></Button>
            <Button onClick={() => setNewSpec(true)}><FontAwesomeIcon icon={faPlus}/></Button>
            <NewSpec show={newSpec} 
              mandatory={wb.specs.length === 0} 
              close={() => setNewSpec(false)}
              addSpec={addSpec}
            />
          </Form>
      </Nav>
      <Nav>
        <Button variant="danger" onClick={() => setDelete(true)}><FontAwesomeIcon icon={faTrashAlt}/></Button>
        <DeleteWorkbook show={deleteWB} close={() => setDelete(false)}/>
        <input ref={importRef} type="file" accept=".gsmwb" onChange={e => loadWb(e.target.files[0])} hidden/>
        <Button variant="secondary" onClick={() => importRef.current.click()}><FontAwesomeIcon icon={faUpload}/></Button>
        <Button variant="success" href={`data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(wb))}`} download="gen-spe-mkr.gsmwb"><FontAwesomeIcon icon={faDownload}/></Button>
      </Nav>
    </Navbar>
  );
}

const NewSpec = ({show, mandatory, addSpec, close}) => {
  const [specName, setSpec] = useState("");
  const [career, setCareer] = useState("");

  const add = () => {
    if(specName.length > 0){ addSpec(new spec(career, specName)); }
    setSpec("");
  }

  return (
    <Modal show={show} onHide={mandatory ? () => {} : close} backdrop={mandatory? "static" : true} keyboard={!mandatory}>
      <Modal.Header>
        <Modal.Title>New Specialisation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Career Name</Form.Label>
            <Form.Control as="input" value={career} onChange={e => setCareer(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Specialisation Name</Form.Label>
            <Form.Control as="input" value={specName} onChange={e => setSpec(e.target.value)}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {!mandatory && <Button variant="secondary" onClick={close}>Cancel</Button>}
        <Button variant="success" onClick={add}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}

const DeleteWorkbook = ({show, close}) => {
  const deleteWB = () => {
    ls.remove("gsmwb");
    window.location.reload();
  }

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Workbook</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <strong>THERE IS NO WAY BACK</strong>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>Cancel</Button>
        <Button variant="danger" onClick={deleteWB}>Good Bye !!!</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MainNav;