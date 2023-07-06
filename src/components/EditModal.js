import { Form,FormLabel, Button } from "react-bootstrap";


export const EditDepartment = ({ theDept, EditDetails }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const departmentName = form.elements["DepartmentName"].value;
    const id = form.elements["DepartmentID"].value;


    fetch('https://localhost:7282/api/updateDepartment', {
      method: "PUT",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        departmentName: departmentName
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("An error occurred while updating the department.");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="DepartmentID">
        <FormLabel>DepartmentID</FormLabel>
        <Form.Control
          type="text"
          name="DepartmentID"
          defaultValue={theDept.id}
          required
          disabled
        />
      </Form.Group>

      <Form.Group>
        <FormLabel>Department Name</FormLabel>
        <Form.Control
          type="text"
          name="DepartmentName"
          defaultValue={theDept.departmentName}
          required
        />
      </Form.Group>
      <Button type="submit">Save Changes</Button>
    </Form>
  );
};




    export const EditEmployee = ({ theEmployee }) => {
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const Id = form.elements["EmployeeID"].value;
        const employeeName = form.elements["EmployeeName"].value;
        const email = form.elements["EmailID"].value;
        const dateOfReport = form.elements["DOJ"].value;
        const department = form.elements["DepartmentName"].value;
    
        // fetch("https://localhost:7282/api/Update?Id=" + Id, {
        fetch("https://localhost:7282/api/Update", {

          method: "PUT",
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           
              id: Id,
              employeeName: employeeName,
              emailID: email,
              doj: dateOfReport,
              departmentName: department
            
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              alert(result);
            })
            .catch((error) => {
              console.log("Error:", error);
              alert("An error occurred while updating the department.");
            });
        };
      


  
    return (
      <Form onSubmit={handleSubmit}>
          <Form.Group controlId="DepartmentID">
          <FormLabel>EmployeeID</FormLabel>
          <Form.Control
            type="text"
            name="EmployeeID"
            defaultValue={theEmployee.id}
            required
            disabled
          />
        </Form.Group>
        
        <Form.Group>
          <FormLabel>Employee Name</FormLabel>
          <Form.Control
            type="text"
            
            name="EmployeeName"
            defaultValue={theEmployee.employeeName}
            required
          />
        </Form.Group>

        <Form.Group>
          <FormLabel>Email Address</FormLabel>
          <Form.Control
            type="text"
            
            name="EmailID"
            defaultValue={theEmployee.emailID}
            required
          />
        </Form.Group>

        <Form.Group>
          <FormLabel>Date of Job</FormLabel>
          <Form.Control
            type="Date"
            
            name="DOJ"
            defaultValue={theEmployee.doj}
            required
          />
        </Form.Group>

        <Form.Group>
          <FormLabel>Department</FormLabel>
          <Form.Control
            type="text"
            
            name="DepartmentName"
            defaultValue={theEmployee.departmentName}
            required
          />
        </Form.Group>
        
        <Button type="submit">Save Changes</Button>
      </Form>
    );
  };
  