import React, { useState, useEffect } from "react";
import { Table, Button, Modal,Spinner } from "react-bootstrap";
import { AddEmployee } from "./AddModal";
import { EditEmployee } from "./EditModal";
import { ViewEmployee } from "./ViewEmployee";


 export const Employee = () => {
  const[isLoading, setIsLoading]=useState(false);
  const [employee, setEmployee] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [view ,setView]=useState(false);
  


   useEffect(() => {
    refreshList();
    setIsLoading(true);

  }, []);

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
    setSelectedEmployee(employees);


  };


  const handleEdit = (dept) => {
    setSelectedEmployee(dept);
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
        <ViewEmployee theEmployee={selectedEmployee}/>
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
 




// import React, { useState } from "react";
// import { Form, Button, Spinner, Modal } from "react-bootstrap";

// export const AddEmployee = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (event) => {
//     setIsLoading(true);
//     event.preventDefault();
//     const form = event.target;

//     const employeeName = form.elements["EmployeeName"].value;
//     const email = form.elements["EmailID"].value;
//     const dateOfReport = form.elements["DOJ"].value;
//     const department = form.elements["DepartmentName"].value;

//     fetch("https://localhost:7282/api/Employees", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         EmployeeName: employeeName,
//         EmailID: email,
//         DOJ: dateOfReport,
//         DepartmentName: department,
//       }),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log("Employee added successfully", result);
//         setIsLoading(false);
//         setShowModal(true);
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//         alert("An error occurred while adding the employee.");
//       });
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3">
//           <Form.Label>Employee Name</Form.Label>
//           <Form.Control type="text" name="EmployeeName" placeholder="James Doe" required />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             name="EmailID"
//             placeholder="name@example.com"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Date of Report</Form.Label>
//           <Form.Control type="Date" name="DOJ" placeholder="name@example.com" required />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Department</Form.Label>
//           <Form.Control type="text" name="DepartmentName" placeholder="@software" required />
//         </Form.Group>
//         <Button type="submit" disabled={isLoading}>
//           {isLoading ? (
//             <Spinner animation="border" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </Spinner>
//           ) : (
//             "Add Employee"
//           )}
//         </Button>
//       </Form>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Success</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Employee added successfully!
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };
