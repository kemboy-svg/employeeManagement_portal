import { Form,FormLabel, Button } from "react-bootstrap";


export const AddForm = () => {

    const handleSubmit = (event) => {
      event.preventDefault();
      const form =event.target;
      const departmentName = form.elements["DepartmentName"].value;
      
  
      fetch("https://localhost:7282/api/Department", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        //   DepartmentID: null,
          DepartmentName: departmentName
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          alert(result);
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("An error occurred while adding the department. 1111");
        });
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <FormLabel>Department Name</FormLabel>
          <Form.Control
            type="text"
            placeholder="Department *"
            name="DepartmentName"
            required
          />
        </Form.Group>
        <Button type="submit">Add Department</Button>
      </Form>
    );
  };
  
  
  export const AddEmployee = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      
      const employeeName = form.elements["EmployeeName"].value;
      const email = form.elements["EmailID"].value;
      const dateOfReport = form.elements["DOJ"].value;
      const department = form.elements["DepartmentName"].value;
    
    

    fetch("https://localhost:7282/api/Employees", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        //   DepartmentID: null,
          EmployeeName:employeeName,
          EmailID:email,
          DOJ:dateOfReport,
          DepartmentName: department
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          alert(result);
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("An error occurred while adding the department. 1111");
        });
    }
  

  
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" name="DepartmentName" placeholder="@software" required />
        </Form.Group>
        <Button type="submit">Add Employee</Button>
      </Form>
    );
  };
  



 