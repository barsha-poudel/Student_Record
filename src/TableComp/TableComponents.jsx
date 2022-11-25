import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Students from '../TableComp/Students';
import { Fragment } from 'react';

const TableComponent =()=>{
    // const handleDelete = (Id) =>{
    //     var index = Students.map(function(e){
    //         return e.Id
    //     }).indexOf(Id);

    //     Students.splice(index, 1);
    // }
    return(
        <>
        <Fragment>
            <div style={{margin:"18rem"}}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Address
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Students && Students.length > 0
                            ?
                            Students.map((student)=> {
                                return(
                                    <tr>
                                        <td>
                                            {student.Id}
                                        </td>
                                        <td>
                                            {student.Name}
                                        </td>
                                        <td>
                                            {student.Address}
                                        </td>
                                        <td>
                                            <Button onClick={()=>alert(student.Id)}>Edit</Button>
                                            &nbsp;
                                            <Button onClick={()=>alert(student.Id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "There Is No Datas"
                        } 
                    </tbody>

                </Table>

            </div>
        </Fragment>
        </>
    )
}
export default TableComponent;