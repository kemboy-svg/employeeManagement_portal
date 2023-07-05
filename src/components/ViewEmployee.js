import { Form,FormLabel} from "react-bootstrap";


export const ViewEmployee =({theEmployee})=>{
    


return (
    <Form>
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
          disabled
        />
      </Form.Group>

      <Form.Group>
        <FormLabel>Email Address</FormLabel>
        <Form.Control
          type="text"
          
          name="EmailID"
          defaultValue={theEmployee.emailID}
          required
          disabled
        />
      </Form.Group>

      <Form.Group>
        <FormLabel>Date of Job</FormLabel>
        <Form.Control
          type="Date"
          
          name="DOJ"
          defaultValue={theEmployee.doj}
          required
          disabled
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
      
      
    </Form>
  );
};