import {useEffect, useState} from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/pro-light-svg-icons';
import * as ls from 'local-storage';

import './App.css';

import workbook from './models/workbook';

import Layout from './layouts/main';
import Info from './components/info';
import Tree from './components/tree';

const App = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [wb, setWB] = useState();
  const [isNew, setNew] = useState(false);

  useEffect(() => {
    let save = ls.get('gsmwb');
    if(save) { setWB(save); } 
    else { setNew(true); }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if(isLoaded){ ls.set('gsmwb', wb); }
  }, [isLoaded, wb]);

  const createWB = (wb) => {
    setWB(wb);
    setNew(false);
  }

  const getIndex = () => wb.specs.findIndex((s) => s.id === wb.current);

  const changeInfo = (info) => {
    wb.specs[getIndex()].info = info;
    setWB({...wb});
  }

  const changeTree = (tree) => {
    console.log(tree);
    wb.specs[getIndex()].tree = tree;
    setWB({...wb});
  }

  return (
    <Layout wb={wb} setWB={setWB}>
      {wb?.current && <>
        <Info {...wb.specs[getIndex()].info} onChange={changeInfo}/>
        <Tree {...wb.specs[getIndex()].tree} onChange={changeTree}/>
      </>}
      <CreateWorkbook show={isNew} setWorkbook={createWB}/>
      {wb && <JsonOut obj={wb}/>}
    </Layout>
  );
}

const CreateWorkbook = ({show, setWorkbook}) => {
  const [name, setName] = useState("");

  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>New Workbook</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control as="input" value={name} onChange={e => setName(e.target.value)}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setWorkbook(new workbook(name))}><FontAwesomeIcon icon={faSave}/></Button>
      </Modal.Footer>
    </Modal>
  );
}

const JsonOut = ({obj}) => (
  <div><pre>{JSON.stringify(obj, null, 2)}</pre></div>
);

export default App;