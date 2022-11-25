import { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuid} from 'uuid';
import {Link, useNavigate} from 'react-router-dom';
import Students from './StudentsObj';

const Add =()=>{
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    let history = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8)

        let a = name, 
        b = address;

        Students.push({id : uniqueId, Name: a, Address: b});
        history('/userdashboard')

    }
    return(
        <>
        <div>
            <Form className='d-grid gap-2' style={{margin:"15rem"}}>
                <Form.Group className='mb-3' controlId="forName">
                    <Form.Control type='text' placeholder='Enter Your Name' required onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId="forAddress">
                    <Form.Control type='text' placeholder='Enter Your Address' required onChange={(e) => setAddress(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' onClick={(e)=>handleSubmit(e)} style={{height:"40px", width:"100px", marginLeft:"200px"}}>Submit</Button>
            </Form>
        </div>
        </>
    )
}
export default Add;