import { Button, Col, Form, Input } from 'antd';
import 'antd/dist/antd.css'

export const AddNewForm = ({ onTitleChanged, onYearChanged, addNewScreenShow, hideAddNewForm }: 
    { onTitleChanged: any, onYearChanged: any, addNewScreenShow: any, hideAddNewForm: any}) => {
  return (
    <div className='add-new-form-container'>
        <h5 className='add-new-title'>Find your favourite movie or TV show</h5>
        <div className='add-new-form'>
            <Form>
                <Form.Item
                    label="Title"
                    name="title"
                >
                    <Input onChange={onTitleChanged} />
                </Form.Item>
                <Form.Item
                    label="Year"
                    name="year"
                >
                    <Input onChange={onYearChanged} />
                </Form.Item>
                <Col className="add-new-buttons">
                    <Button onClick={addNewScreenShow} className='primary-button' >
                        Submit
                    </Button>
                    <Button onClick={hideAddNewForm} className='danger-button' >
                        Close
                    </Button>
                </Col>
            </Form>
        </div>
    </div>
  );
};

export default AddNewForm;