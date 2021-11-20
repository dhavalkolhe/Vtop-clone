import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import '../css/DigitalAssignment.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const SubjectDetails = (props) => {

    return (

        <div className="table-container">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Sl. No</th>
                    <th>Class Nbr</th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Course Type</th>
                    <th>Faculty Name</th>
                    <th>Dashboard</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>VL2021220104626</td>
                        <td>CSE1002</td>
                        <td>Problem Solving and Object Oriented Programming</td>
                        <td>LO</td>
                        <td>JABANJALIN HILDA J - SCOPE</td>
                        <td onClick={props.handleClick} className="cursor"><i class="fa fa-fw fa-folder-open"></i></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>VL2021220103526</td>
                        <td>CSE2005</td>
                        <td>Operating Systems</td>
                        <td>ETH</td>
                        <td>MANOOV R - SCOPE</td>
                        <td onClick={props.handleClick} className="cursor"><i class="fa fa-fw fa-folder-open"></i></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>VL2021220104275</td>
                        <td>CSE2005</td>
                        <td>Operating Systems</td>
                        <td>ELA</td>
                        <td>MANOOV R - SCOPE</td>
                        <td onClick={props.handleClick} className="cursor"><i class="fa fa-fw fa-folder-open"></i></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>VL2021220103829</td>
                        <td>CSE3009</td>
                        <td>Internet of Things</td>
                        <td>ETH</td>
                        <td>YOKESH BABU S - SCOPE</td>
                        <td onClick={props.handleClick} className="cursor"><i class="fa fa-fw fa-folder-open"></i></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>VL2021220105058</td>
                        <td>EEE1001</td>
                        <td>Basic Electrical and Electronics Engineering</td>
                        <td>ETH</td>
                        <td>PALANISAMY K - SELECT</td>
                        <td onClick={props.handleClick} className="cursor"><i class="fa fa-fw fa-folder-open"></i></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default SubjectDetails
