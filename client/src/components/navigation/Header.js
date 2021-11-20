import React from 'react'
import { Navbar, Nav, Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './nav.css'

const Header = (props) => {

    return (
        <div>
        <Navbar className="navbar" appearance={'inverse'}>
                    
                    <Nav className="profile" >
                        <Dropdown title="20BKT0153 (STUDENT)" className="card">
                            <Dropdown.Item>
                                <div class="circular--landscape">
                                    <img src="https://www.w3schools.com/howto/img_avatar.png"/>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item><button className = "sign-btn">Sign Out</button></Dropdown.Item>
                        </Dropdown>
                    </Nav>
                    <Nav pullRight>
                        
                    </Nav>
                    <div className="header-text">VIT <span className="subtitle">(Vellore Campus)</span> 
                        <i className="fa fa-fw fa-home btn-home" onClick = {() => props.handleClick(false)} style={{color: "white", marginLeft: "1rem"}}/>
                    </div>
        </Navbar>
        </div>

    )
}

export default Header
