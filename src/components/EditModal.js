import { Form,FormLabel, Button } from "react-bootstrap";


export const EditDepartment = ({theDept}) => {

    const handleSubmit = (event) => {
      event.preventDefault();
      const form =event.target;
      const departmentName = form.elements["DepartmentName"].value;
      const id = form.elements["DepartmentID"].value;
  
      fetch("https://localhost:7282/api/updateDepartment", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          DepartmentID:id,
          DepartmentName: departmentName
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
            // defaultValue={this.departs.id}
            defaultValue={theDept.id}
            required
            disabled
          />
        </Form.Group>
        
        <Form.Group>
          <FormLabel>Department Name</FormLabel>
          <Form.Control
            type="text"
            placeholder="Department *"
            name="DepartmentName"
            defaultValue={theDept.departmentName}
            required
          />
        </Form.Group>
        <Button type="submit">Save Changes</Button>
      </Form>
    );
  };
  