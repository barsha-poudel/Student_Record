import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './UserDashboard.css';

const userDashboard = () =>{
    return(
        <div className='main-container'>
          
    <Container className='nav-container'>
      <Navbar expand="lg" variant="light" >
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
        </div>
    )
}
export default userDashboard;