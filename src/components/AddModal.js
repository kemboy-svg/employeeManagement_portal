
import { Form, Button } from "react-bootstrap";


export const AddForm =()=>{
    return(
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Department *" required/>
            </Form.Group>

            <Button variant="Success" type="Submit" block>Add new Department</Button>

        </Form>
    )
  
}
