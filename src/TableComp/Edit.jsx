import { useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuid} from 'uuid';
import {Link, useNavigate} from 'react-router-dom';
import Students from './StudentsObj';

function Edit(){
    const [name,setName] = useState("")
    const [address, setAddress] = useState("")
    const [id, setId] = useState("")

    let history = useNavigate();

    var index = Students.map(function(e){
        return e.id
    }).indexOf(id); 

    const handleSubmit = (e)=>{
        e.preventDefault();
        let a = Students[index];
        console.log(a);
        a.Name = name;
        a.Address = address;

        history('/userdashboard')
    }
    
    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAddress(localStorage.getItem('Address'))
        setId(localStorage.getItem('id'))
    },[])
    return(
        <>
        <div>
            <Form className='d-grid gap-2' style={{margin:"15rem"}}>
                <Form.Group className='mb-3' controlId="forName">
                    <Form.Control type='text' placeholder='Enter Your Name' value={name || ""} required onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId="forAddress">
                    <Form.Control type='text' placeholder='Enter Your Address' value={address || ""} required onChange={(e) => setAddress(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' onClick={(e)=>handleSubmit(e)} style={{height:"40px", width:"100px", marginLeft:"200px"}}>UPDATE</Button>
            </Form>
        </div>
        </>
    )

}
export default Edit;