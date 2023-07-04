import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { AddDepartment } from "./AddModal";
import { EditDepartment } from "./EditModal";

export const Department = () => {
  const [departmentData, setDepartmentData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    fetch("https://localhost:7282/api/Departmentview")
      .then((response) => response.json())
      .then((data) => {
        setDepartmentData(data);
      });
  };

  const handleClose = () => {
    setShow(false);
    setSelectedDept(null);
  };

  const handleShow = () => setShow(true);

  const handleEdit = (dept) => {
    setSelectedDept(dept);
    setShow(true);
  };

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
          {departmentData.map((dept) => (
            <tr key={dept.DepartmentID}>
              <td>{dept.id}</td>
              <td>{dept.departmentName}</td>
              <td>
                <Button
                  variant="secondary"
                  onClick={() => handleEdit(dept)}
                >
                  Edit
                </Button>
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
        {selectedDept ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Edit Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditDepartment theDept={selectedDept} />
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>New Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddDepartment />
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

export default Department;
