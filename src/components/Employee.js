import React, { useState, useEffect } from "react";
import { Table, Button, Modal,Spinner } from "react-bootstrap";
import { AddEmployee } from "./AddModal";
import { EditEmployee } from "./EditModal";
import { ViewEmployee } from "./ViewEmployee";


 export const Employee = () => {
  const[isLoading, setIsLoading]=useState(false);
  const [employee, setEmployee] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [view ,setView]=useState(false);
  const [selectedView, setSelectedView]=useState([]);
  


   useEffect(() => {
    if(!selectedEmployee){
      refreshList();
      setIsLoading(true)
    }
   

  }, [selectedEmployee]);

  const  refreshList = () => {

    try {
      fetch("https://localhost:7282/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
   const addEmployee =async(employeeName,email,dateOfReport,department)=>{
   
    try {
      fetch("https://localhost:7282/api/Employees", {
        method: "POST",
        headers: {
         'Accept' : "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        
          EmployeeName:employeeName,
          EmailID:email,
          DOJ:dateOfReport,
          DepartmentName: department
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          alert(result);
          setIsLoading(false);
          refreshList();
          handleClose();

        })
      
    } catch (error) {
      console.log("Error:", error);
      alert("An error occurred while adding the department. 1111");
    }
   }

  const handleClose = () => {
    setView(false);
    setShow(false);
    setSelectedEmployee(null);
  };
  const handleShow = () =>{
    setShow(true);

  };
  const handleView = (employees) =>{
    setView(true);
    setSelectedView(employees);


  };


  const handleEdit = (employees) => {
    setSelectedEmployee(employees);
    setShow(true);
  };

   const deleteUser = (id) => {
    if (window.confirm('Are you sure?')){
      fetch(`https://localhost:7282/api/DeleteEmployee/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      
      
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
        refreshList();
        
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("An error occurred while deleting the user.");
      });
    }
  };
  

  return (
    
    <>
    
      <Table mt-4 striped bordered hover size="sm" disabled={isLoading}>
      {isLoading ? (
        <>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          </>
        ):(
        <>
        <thead>
          <tr>
            <th>EmployeeID</th>
            <th>Employee Name</th>
            <th>Email Address</th>
            <th>Employee DOJ</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employees) => (
            <tr key={employees.id}>
              <td>{employees.id}</td>
              <td>{employees.employeeName}</td>
              <td>{employees.emailID}</td>
              <td>{employees.doj}</td>
              <td>{employees.departmentName}</td>
              <td>
                <Button size="sm" variant="info" onClick={()=>handleView(employees)}>View</Button>
                <Button variant="secondary" onClick={() => handleEdit(employees)}>Edit</Button>
                <Button variant="danger" onClick={() => {deleteUser(employees.id)}}>Delete </Button>
              </td>
            </tr>
          ))}
        </tbody>
        </>
  )}
      </Table>
      <Button onClick={handleShow} variant="secondary">
        Add New Employee
      </Button>
      
  
      <Modal show={show} onHide={handleClose}>
        {selectedEmployee ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Edit Employee Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditEmployee theEmployee={selectedEmployee} />
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>New Employee </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddEmployee addEmployee={addEmployee} />
            </Modal.Body>
          </>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={view} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ViewEmployee theEmployee={selectedView}/>
        </Modal.Body  >
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      
    </>

  );
};
 
