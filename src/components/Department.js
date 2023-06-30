import React, { Component } from "react"; 
import { Table, Button } from "react-bootstrap";

export class Department extends Component{
    constructor(props){
        super(props);
        this.state={depart:[]}
    }
    componentDidMount(){
        this.refreshList()
    }

    refreshList(){
       fetch('https://localhost:7282/api/Departmentview')
       .then(response=>response.json())
       .then(data=> {this.setState({depart:data});
    });
    }
    render(){
        const {depart}=this.state
        return(
            <>
            <Table mt-4 striped bordered hover size="sm">
                <thead>
                    <th>DepartmentID</th>
                    <th>DepartmentName</th>
                    
                </thead>
                <tbody>
                    {depart.map(departs=>
                        <tr key={departs.DepartmentID}>
                        <td>{departs.id}</td>
                        <td>{departs.departmentName}</td>
                      <tr><Button variant="secondary">Edit</Button>
                      <Button variant="danger">Delete</Button>
                      </tr>
                      </tr>
                        
                    )}
                </tbody>
            </Table>
            <Button variant="secondary">Add New Department</Button>
            </>
        )
    }
}