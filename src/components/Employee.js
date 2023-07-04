import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { AddEmployee } from "./AddModal";
import { EditEmployee } from "./EditModal";


 export const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  


   useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    fetch("https://localhost:7282/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      });
  };
  // refreshList();
  const handleClose = () => {
    setShow(false);
    setSelectedEmployee(null);
  };
  const handleShow = () => setShow(true);

  const handleEdit = (dept) => {
    setSelectedEmployee(dept);
    setShow(true);
  };

   const deleteUser = (Id) => {
    fetch(`https://localhost:7282/api/DeleteEmployee?${Id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
        
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("An error occurred while deleting the user.");
      });
  };
  

  return (
    <>
      <Table mt-4 striped bordered hover size="sm">
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
                <Button size="sm" variant="info">View</Button>
                <Button variant="secondary" onClick={() => handleEdit(employees)}>Edit</Button>
                <Button variant="danger" onClick={deleteUser}>Delete </Button>
              </td>
            </tr>
          ))}
        </tbody>
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
              <AddEmployee />
            </Modal.Body>
          </>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
