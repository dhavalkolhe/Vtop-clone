import React, { useState } from 'react'
import '../css/DigitalAssignment.css'
import axios from  'axios'
import SuccessTool from './SuccessTool'

const UploadTool = (props) => {

    const [file, setFile] = useState(null)

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }
    const [showSuccessTool, setShowSuccessTool] = useState(false);
    const handleSuccess = (bool) => {
        setShowSuccessTool(bool);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('file', file);

        axios.post('//localhost:8000/upload', data)
            .then((e) => {
                console.log("success");
                {{
                    if (file != null){
                        handleSuccess(true)
                    }
                }}
            })
            .catch((e)=>{
                console.error('Error', e)
                alert("Upload Failed")
            })
    }


    return (
        <div>
            {showSuccessTool ? <SuccessTool /> :
            
            <div className="">
                <form method="post" onSubmit={onSubmit}>
                    <input type="file" name="file" onChange={handleFile} onSubmit={onSubmit}/>

                    <button className="cursor submit-btn">Submit</button>
                </form>

                <button onClick={() => props.handleClick(false)}
                    className="cursor cancel-btn"
                >Cancel</button>
            </div>    
            }
            
        </div>
    )
}

export default UploadTool
