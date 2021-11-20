import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import '../css/DigitalAssignment.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadTool from './UploadTool';

const UploadPage = () => {

    const [showUploadTools, setShowUploadTools] = useState(false);
    const handleClick = (bool) => {
        setShowUploadTools(bool);
    }

    
    
    return (
        <div className="table-container">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Semester</th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Course Type</th>
                    <th>Class Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>*Course Code*</td>
                        <td>*Course Title*</td>
                        <td>*Course Type*</td>
                        <td>*Class Number*</td>
                    </tr>
                </tbody>
            </Table>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Sl. No</th>
                    <th>Title</th>
                    <th>Max. Mark</th>
                    <th>Weightage %</th>
                    <th>Due Date</th>
                    <th>QP</th>
                    <th>Upload</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Assignment 1</td>
                        <td>10</td>
                        <td>8</td>
                        <td>10-Dec-2021</td>
                        <td>-</td>
                        {showUploadTools ? <UploadTool handleClick={handleClick}/>:
                            <td onClick={() => handleClick(true)}><i class="fa fa-fw fa-pencil cursor"></i></td>
                        }
                            
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default UploadPage
