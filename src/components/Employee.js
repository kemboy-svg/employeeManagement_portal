import React, { Component } from "react"; 
import { Table, Button } from "react-bootstrap";

export class Employee extends Component{
    constructor(props){
        super(props);
        this.state={employee:[]}
    }
    componentDidMount(){
        this.refreshList()
    }

    refreshList(){
       fetch('https://localhost:7282/api/employees')
       .then(response=>response.json())
       .then(data=> {this.setState({employee:data});
    });
    }
    render(){
        const {employee}= this.state
        return(
            <>
            <Table mt-4 striped bordered hover size="sm">
                <thead>
                    <th>EmployeeID</th>
                    <th>Employee Name</th>
                    <th>Email Address</th>
                    <th>Employee DOJ</th>
                    <th>Department</th>
                    
                </thead>
                <tbody>
                {employee.map(employees=>
                        <tr key={employees.id}>
                        <td>{employees.id}</td>
                        <td>{employees.employeeName}</td>
                        <td>{employees.emailID}</td>
                        <td>{employees.doj}</td>
                        <td>{employees.departmentName}</td>
                        <tr>
                     <Button variant="info">View</Button>      
                      <Button variant="secondary">Edit</Button>
                      <Button variant="danger">Delete</Button>
                      </tr>
                       
                        </tr>
                    )}

                </tbody>
            </Table>
             <Button variant="secondary">Add New Employee</Button>
             </>
        )
    }
}