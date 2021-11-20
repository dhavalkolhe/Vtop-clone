import React, { useState } from "react";
import { Form } from "react-bootstrap";
import SubjectDetails  from "./SubjectDetails";
import '../css/DigitalAssignment.css'
import UploadPage from "./UploadPage";

const DigitalAssignmentUpload = () => {
    const [value, setValue]=useState('');
    const [goToUploadPage, setgoToUploadPage] = useState(false);

    const handleClick = () => {
        setgoToUploadPage(true);
    }

    const onChange =(e) => {
        setValue(e.target.value);
    }

    return (
        <div className="container">
            <h1 className="header">Assignment Upload</h1> 
            {goToUploadPage ? <UploadPage /> : 
                <div>
                    <div className="form-container">
                        <p className="title">Select Semester</p>
                        <Form.Control
                            as="select"
                            custom
                            onChange={onChange}
                            className="form"
                            >
                            <option>--Choose Semester--</option>
                            <option value="Fall Semester 2021-22">Fall Semester 2021-22</option>
                            <option value="Winter Semester 2020-21">Winter Semester 2020-21</option>
                            <option value="Fall Semester 2020-21">Fall Semester 2020-21</option>
                            <option value="Winter Semester 2019-20">Winter Semester 2019-20</option>
                        </Form.Control>
                    </div>
                    { value == "Fall Semester 2021-22" ? <SubjectDetails goToUploadPage = {goToUploadPage} handleClick={handleClick} /> : null }
                </div>
            }
        </div>
    )
}

export default DigitalAssignmentUpload
