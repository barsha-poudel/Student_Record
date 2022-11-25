import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './UserDashboard.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import TableComponent from '../TableComp/TableComponents';

const UserDashboard = () =>{
    const [studentsData,setStudentsData] = useState([])
    const getAllStudents =()=>{
    //     fetch("http://127.0.0.1:8000/admin/api/student/",{
    //     })
    //    try{
    //     const result = JSON.parse();
    //     console.log(result);
    //    }
    //    catch(err){
    //     console.log('Error:',err.message);
    //    }

     }
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
        <Button variant="primary" size="lg" onClick={getAllStudents} >
        Click Record
      </Button>
      <TableComponent/>
      </>
    )
}
export default UserDashboard;