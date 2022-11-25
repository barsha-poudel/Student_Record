import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Students from '../TableComp/Students';
import { Fragment } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';



const TableComponent =()=>{
    const [student, setStudents] = useState(Students)
    const handleDelete = (id) =>{
        var index = student.filter(function(e){
            return e.id !== id
        })
        setStudents(index)
        console.log(student)
    }

    return(
        <>
        <Fragment>
            <div style={{margin:"18rem"}}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student && student.length > 0
                            ?
                            student.map((student, index)=> {
                                return(
                                    <tr key={index}>
                                        <td>
                                            {student.Name}
                                        </td>
                                        <td>
                                            {student.Address}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={()=>alert(student.id)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={()=>handleDelete(student.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "There Is No Datas"
                        } 
                    </tbody>

                </Table>
                <br>
                </br>
                <Link className= "d-grid gap-2" to='/create'>
                    <Button size='lg'>Create</Button>
                </Link>

            </div>
        </Fragment>
        
        </>
    )
}
export default TableComponent;