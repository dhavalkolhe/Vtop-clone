import React from 'react'
import './nav.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidebar = (props) => {
    return (
        <SideNav
            className="side-nav"
            onSelect={(selected) => {
                // Add your code here
            }}
            
        >
            <SideNav.Toggle className="toggle-btn"/>
            
            <SideNav.Nav className="nav-con">

                {/* Contact US */}
                <NavItem eventKey="ContactUs">
                    <NavIcon >
                        <i className="fa fa-fw fa-phone-square main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text main-sub-text">Contact Us</p>
                    </NavText>
                </NavItem>

                {/* My Info */}
                <NavItem eventKey="myInfo">
                    <NavIcon >
                        <i className="fa fa-fw fa-briefcase main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">My Info</p>
                    </NavText>

                    <NavItem eventKey="myInfo/Profile" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Profile</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="myInfo/YourCredentials" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Your Credentials</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="myInfo/DayboarderInfo" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon" />
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Dayboarder Info</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="myInfo/AcknowledgementView" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon" />
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Acknowledgement View</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="myInfo/StudentBankInfo" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon" />
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Student Bank Info</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="myInfo/DigitaliPadDeviceCredentials" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon" />
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Digital iPad Device Credentials</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="myInfo/MyDigitalIdCard" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon" />
                        </NavIcon>
                        <NavText>
                            <p className="main-text">My Digital Id Card</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="myInfo/VaccinatedDetails" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon" />
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Vaccinated Details</p>
                        </NavText>
                    </NavItem>
                </NavItem>

                {/* Info Corner */}
                <NavItem eventKey="infoCorner">
                    <NavIcon >
                        <i className="fa fa-fw fa-info-circle main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">Info Corner</p>
                    </NavText>

                    <NavItem eventKey="infoCorner/FAQs" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">FAQs</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="infoCorner/Spotlight" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Spotlight</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="infoCorner/ViewCircular(s)" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon" />
                        </NavIcon>
                        <NavText>
                            <p className="main-text">View Circular(s)</p>
                        </NavText>
                    </NavItem>
                </NavItem>

                {/* Proctor */}
                <NavItem eventKey="Proctor">
                    <NavIcon >
                        <i className="fa fa-fw fa-paw main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">Proctor</p>
                    </NavText>

                    <NavItem eventKey="Proctor/ViewProctorDetails" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">View Proctor Details</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Proctor/ViewVtopMessageFromProctor" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">View Vtop Message From Proctor</p>
                        </NavText>
                    </NavItem>
                </NavItem>

                {/* Academics */}
                <NavItem eventKey="Academics">
                    <NavIcon >
                        <i className="fa fa-fw fa-graduation-cap main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">Academics</p>
                    </NavText>

                    <NavItem eventKey="Academics/HODandDEANInfo" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">HOD and DEAN Info</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/CourseFeedback24x7" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Course Feedback 24 x 7</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/BiometricsInfo" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Biometrics Info</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/ClassMessages" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Class Messages</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/Regulation" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Regulation</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/Minor-Honor" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Minor/ Honor</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/Timetable" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Timetable</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/CourseOptionChange" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Course Option Change</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/CourseWithdraw" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Course Withdraw</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/ClassAttendance" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Class Attendance</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/CoursePage" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">CoursePage</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/IndustrialInternship" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Industrial Internship</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/Project" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Project</p>
                        </NavText>
                    </NavItem>
                    {/* ////////////////////////////////////////////////////////////////////// */}
                    <NavItem eventKey="Academics/DigitalAssignmentUpload" className="menu-item" onClick = {() => props.handleClick(true)}>
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Digital Assignment Upload</p>
                        </NavText>
                    </NavItem>
                    {/* ///////////////////////////////////////////////////////////////////// */}
                    <NavItem eventKey="Academics/QCMView" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">QCM View</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/SetConferenceRegistration" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Set Conference Registration</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/Co-ExtraCirricular" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Co-Extra Cirricular</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/WishlistRegistration" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Wishlist Registration</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Academics/AcademicCalender" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Academic Calender</p>
                        </NavText>
                    </NavItem>
                </NavItem>

                {/* Research */}
                <NavItem eventKey="Research">
                    <NavIcon >
                        <i className="fa fa-fw fa-university main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">Research</p>
                    </NavText>

                    <NavItem eventKey="Research/MyResearchProfile" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">My Research Profile</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Research/SEMRequest" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">SEM Request</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Research/CourseWorkRegistraion" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Course Work Registraion</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Research/RegistrationStatus" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Registration Status</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Research/MeetingInfo" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Meeting Info</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Research/AttendanceView" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Attendance View</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Research/ScholarLeaveRequest" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">ScholarLeave Request</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Research/ResearchLetters" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Research Letters</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Research/ElectronicThesisSubmission" className="menu-item">
                        <NavIcon >
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">ElectronicThesis Submission</p>
                        </NavText>
                    </NavItem>
                </NavItem>

                {/* Examination */}
                <NavItem eventKey="Examination">
                    <NavIcon >
                        <i className="fa fa-fw fa-book main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">Examination</p>
                    </NavText>

                    <NavItem eventKey="Examination/ExamSchedule" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Exam Schedule</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Examination/Marks" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Marks</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Examination/Grades" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Grades</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Examination/Paper-see-rev" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Paper-see-rev</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Examination/ProjectFileUpload" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Project File Upload</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Examination/MOOCFileUpload" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">MOOC File Upload</p>
                        </NavText>
                    </NavItem>
                </NavItem>

                {/* Services */}
                <NavItem eventKey="Services">
                    <NavIcon >
                        <i className="fa fa-fw fa-fighter-jet main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">Services</p>
                    </NavText>

                    <NavItem eventKey="Services/PatRegistration" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Pat Registration</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Services/OnlineBookReccomendation" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Online Book Reccomendation</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Services/TranscriptRequest" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Transcript Request</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Services/Achievements" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Achievements</p>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Services/ProgrammeMigration" className="menu-item">
                        <NavIcon>
                            <i className="fa fa-fw fa-crosshairs main-icon"/>
                        </NavIcon>
                        <NavText>
                            <p className="main-text">Programme Migration</p>
                        </NavText>
                    </NavItem>
                </NavItem>

                {/* Library */}
                <NavItem eventKey="Library">
                    <NavIcon >
                        <i className="fa fa-fw fa-university main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">Library</p>
                    </NavText>
                </NavItem>

                {/* Bonafide */}
                <NavItem eventKey="Bonafide">
                    <NavIcon >
                        <i className="fa fa-fw fa-circle main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">Bonafide</p>
                    </NavText>
                </NavItem>

                {/* Online Payments */}
                <NavItem eventKey="OnlinePayments">
                    <NavIcon >
                        <i className="fa fa-fw fa-cc-visa main-icon"/>
                    </NavIcon>
                    <NavText>
                        <p className="main-text">Online Payments</p>
                    </NavText>
                </NavItem> 
            </SideNav.Nav>
        </SideNav>
    )
}

export default Sidebar




