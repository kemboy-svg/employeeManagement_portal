import React, { useState } from "react";
import { Form, FormLabel, Button, Spinner } from "react-bootstrap";
// import { Department } from "./Department";

export const AddDepartment = ({ addDept }) => {
  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    const form = event.target;
    const departmentName = form.elements["DepartmentName"].value;

    try {
      const resp = await addDept(departmentName);

      if (resp) {
        setIsLoading(false);
      }
    } catch (e) {
      
    }
   
  };

  return (
    <Form  onSubmit={handleSubmit}>
      <Form.Group>
        <FormLabel>Department Name</FormLabel>
        <Form.Control
          type="text"
          placeholder="Department *"
          name="DepartmentName"
          required
        />
      </Form.Group>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          "Add Department"
        )}
      </Button>
    </Form>
  );
};

  
  export const AddEmployee = ({addEmployee}) => {
  const[isLoading, setIsLoading]=useState(false);

    const handleSubmit = async (event) => {
      setIsLoading(true);
      event.preventDefault();
      const form = event.target;
      
      
      const employeeName = form.elements["EmployeeName"].value;
      const email = form.elements["EmailID"].value;
      const dateOfReport = form.elements["DOJ"].value;
      const department = form.elements["DepartmentName"].value;

      try {
        const res = await addEmployee(employeeName,email,dateOfReport,department);
  
        if (res) {
          setIsLoading(false);
        }
      } catch (e) {
        
      }
    }
    
    //  fetch("https://localhost:7282/api/Employees", {
    //     method: "POST",
    //     headers: {
    //      'Accept' : "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //     //   DepartmentID: null,
    //       EmployeeName:employeeName,
    //       EmailID:email,
    //       DOJ:dateOfReport,
    //       DepartmentName: department
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       alert(result);
    //       setIsLoading(false);

    //     })
    //     .catch((error) => {
    //       console.log("Error:", error);
    //       alert("An error occurred while adding the department. 1111");
    //     });
    
  

  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type="text" name="EmployeeName" placeholder="James Doe" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="EmailID"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Report</Form.Label>
          <Form.Control type="Date" name="DOJ" placeholder="name@example.com" required />
        </Form.Group>
        {/* <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Choose Department"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </DropdownButton>
          </InputGroup> */}

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" name="DepartmentName" placeholder="@software" required />
        </Form.Group>
        <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          "Add Employee"
        )}
      </Button>
      </Form>
    );
  };
  



 