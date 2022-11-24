import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const AddNewForm = ({ onTitleChanged, onYearChanged, addNewScreenShow, hideAddNewForm }: 
    { onTitleChanged: any, onYearChanged: any, addNewScreenShow: any, hideAddNewForm: any}) => {
  return (
    <div className='add-new-form-container'>
        <h5 className='add-new-title'>Find your favourite movie or TV show</h5>
        <div className='add-new-form'>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={onTitleChanged} type="text" placeholder="Enter title" />
                    </Col>
                    <Col>
                        <Form.Label>Year</Form.Label>
                        <Form.Control onChange={onYearChanged} type="text" placeholder="Enter year" />
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginLeft: '23%', marginTop: '3%'}}>
                        <Button variant="primary" className='parameter-button' style={{margin: '1em'}} onClick={addNewScreenShow} >
                            Submit
                        </Button>
                        <Button onClick={hideAddNewForm}  style={{margin: '1em'}} variant="danger" >
                            Hide
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </div>
  );
};

export default AddNewForm;