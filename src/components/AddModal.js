
import { Form, } from "react-bootstrap";


export const AddForm =()=>{
    return(
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Department *" required/>
            </Form.Group>

            

        </Form>
    )
  

    
}

export const AddEmployee =()=>{
    return(
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Employee Name *" required/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Email Adress *" required/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Date of report *" required/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Department *" required/>
            </Form.Group>




            

        </Form>
    )
    }