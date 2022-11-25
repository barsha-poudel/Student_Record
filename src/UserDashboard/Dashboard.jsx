import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './UserDashboard.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import TableComponent from '../TableComp/TableComponents';

const UserDashboard = () =>{
  const [isDisplay, setIsDisplay] =useState(false)
    return(
        <>
        <div className='main-container'>
          
    <Container className='nav-container'>
      <Navbar expand="lg" variant="light" >
        <Container>
          <Navbar.Brand href="#" className='nav-content'>STUDENT RECORD</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
        </div>
        <Button className='create-btn' variant="primary" size="lg" onClick={()=>setIsDisplay(!isDisplay)} >
        RECORD
      </Button>
      {isDisplay && <TableComponent/> }
   
      </>
    )
}
export default UserDashboard;