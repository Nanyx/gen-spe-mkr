import {Container} from 'react-bootstrap';

import Navbar from './navbar';

const MainLayout = ({wb, setWB, children}) => (
  <>
    {wb && <Navbar wb={wb} setWB={setWB}/>}
    <Container>
      {children}
    </Container>
  </>
);

export default MainLayout;