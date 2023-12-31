import React, { Component } from "react"; 
import { NavLink } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="red" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="Employee">Employee</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="Department">Department</NavLink>

                </Nav>
                </NavbarCollapse>

            </Navbar>
        )
    }
}
 