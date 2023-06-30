import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { AddEmployee } from "./AddModal";

 export const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [show, setShow] = useState(false);

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <Button variant="info">View</Button>
                <Button variant="secondary">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleShow} variant="secondary">
        Add New Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEmployee />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
