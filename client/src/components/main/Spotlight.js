import React from 'react'
import './css/Spotlight.css'

const Spotlight = () => {
    return (
        <div className="spt-container">
            <div className="title">Spotlight</div>
            <hr style={{width: "85%"}}/>
            <div className="content-container">
                <button className=" btn-spotlight">Academic Research</button>
                <ul className="list">
                    <li>FAT Registration for Coursework Exam (FALL 2021-22) has been extended till 14.11.2021</li>
                    <li><a>Coursework Syllabus</a></li>
                    <li><a>Standard Operating Procedure</a></li>
                    <li><a>Downloadable Formats for Students</a></li>
                </ul>
            </div>
            <hr style={{width: "85%"}}/>
            <div className="content-container">
                <button className="btn-spotlight">Others</button>
                <ul className="list">
                    <li><a>Useful Email Contacts</a></li>
                    <li><a>Link for National Scholarship Portal</a></li>
                    <li><a>B.Tech-Freshers_CompleteInfo</a></li>
                    <li><a>Central Library - Resource Guidelines</a></li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Spotlight
