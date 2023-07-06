import React, { useState, useEffect } from "react";
import { Table, Button, Modal,Spinner } from "react-bootstrap";
import { AddDepartment } from "./AddModal";
import { EditDepartment } from "./EditModal";

 export const Department = () => {
  const[isLoading, setIsLoading]=useState(false);
  const [departmentData, setDepartmentData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);

  useEffect(() => {
    if (!selectedDept) {
      refreshList();
      setIsLoading(true);
    }
    
  }, [selectedDept]);
  
  const refreshList = () => {
   try {
    fetch("https://localhost:7282/api/Departmentview")
    .then((response) => response.json())
    .then((data) => {
      setDepartmentData(data);
      setIsLoading(false);
    });
    
   } catch (error) {
    console.log("Error:", error);
    alert("An error occured.");

   }
  };
 
  const addDept = async (departmentName) => {
    try {
      
      fetch("https://localhost:7282/api/Department", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DepartmentName: departmentName,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
        refreshList();
        handleClose();
        return true;
      })
    } catch (error) {
      console.log("Error:", error);
      alert("An error occurred while adding the department.");
    }
  }

  const handleClose = () => {
    setShow(false);
    setSelectedDept(null);
  };

  const handleShow = () => setShow(true);

  const handleEdit = (dept) => {
    setSelectedDept(dept);
    setShow(true);
  };






  const deleteUser = (id) => {
    if (window.confirm('Are you sure?')){
      fetch(`https://localhost:7282/api/Delete/${id}`, {
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
                <Button variant="danger" onClick={() => {deleteUser(dept.id)}}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
        </>
        )}
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
              <AddDepartment addDept={addDept} />
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

