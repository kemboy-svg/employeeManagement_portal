import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { AddForm } from "./AddModal";

 export const Department = () => {
  const [depart, setDepart] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    fetch("https://localhost:7282/api/Departmentview")
      .then((response) => response.json())
      .then((data) => {
        setDepart(data);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Table mt-4 striped bordered hover size="sm">
        <thead>
          <tr>
            <th>DepartmentID</th>
            <th>DepartmentName</th>
          </tr>
        </thead>
        <tbody>
          {depart.map((departs) => (
            <tr key={departs.DepartmentID}>
              <td>{departs.id}</td>
              <td>{departs.departmentName}</td>
              <td>
                <Button variant="secondary">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleShow} variant="secondary">
        Add New Department
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Department
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Department;
