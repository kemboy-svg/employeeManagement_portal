import { Form,FormLabel, Button } from "react-bootstrap";



export const AddForm = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const departmentName = formData.get("DepartmentName");
  
      fetch("https://localhost:7282/api/Department", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          DepartmentID: null,
          DepartmentName: departmentName,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          alert(result);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while adding the department.");
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
      alert(
        `Employee Name: ${employeeName}\nEmail: ${email}\nDate of Report: ${dateOfReport}\nDepartment: ${department}`
      );
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type="text" name="EmployeeName" placeholder="James Doe" />
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
          <Form.Control type="Date" name="DOJ" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" name="DepartmentName" placeholder="@software" />
        </Form.Group>
        <Button type="submit">Add Department</Button>
      </Form>
    );
  };
  



 