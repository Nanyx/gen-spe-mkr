import {Container} from 'react-bootstrap';

import Navbar from './navbar';

const MainLayout = ({wb, setWB, children}) => (
  <>
    {wb && <Navbar wb={wb} setWB={setWB}/>}
    <Container style={{marginTop: "60px"}}>
      {children}
    </Container>
  </>
);

export default MainLayout;