import { Button, Form, Row, Col, Input, Select } from 'antd';
import 'antd/dist/antd.css'

let genres = ['', 'Crime', 'Drama', 'Action', 'Thriller', 'Horror', 'Fantasy', 'Animation', 'Comedy', 'Romance', 'War',
    'Mystery', 'Adventure', 'Film-Noir', 'Western', 'Sci-Fi', 'Biography', 'Sport', 'History', 'Family', 'Short', 'Music'].sort();
let ratings = ['','Approved', 'G', 'PG', 'PG-13', 'R', 'TV-MA', 'TV-PG', 'TV-Y7', 'TV-14'];

const { Option } = Select;

export const ParameterFields = ({ onParameterChanged, setSelectValue, filterData, refresh, openModal, showAll, toggleShowAll }: 
    { onParameterChanged: any,  setSelectValue: any, filterData: any, refresh: any, openModal: any, showAll: boolean, toggleShowAll: any}) => {

    const renderOptions = (options: any[]) => {
        return options.map(item => {
            return <Option value={item}>{item}</Option>
        });
    }

    let toggleLabel = showAll ? 'Hide' : 'Show';
    let bottomParamStyle = showAll ? {
        opacity: 1, transition: 'opacity 1000ms ease-in-out', overflow: 'auto'
    }: {
        opacity: 0, transition: 'opacity 1000ms ease-in-out', overflow: 'auto', height: 0
    }; 

  return (
    <Form className='parameter-form'>
        <Row style={{ marginLeft: '15%'}}>
            <Col>
                <Form.Item
                    label="Title"
                    name="title"
                    className='parameter-item'
                >
                    <Input onChange={onParameterChanged} placeholder="Enter title" />
                </Form.Item>
            </Col>
            <Col>
                <Form.Item
                    label="Year"
                    name="year"
                    style={{ marginLeft: '1em'}}
                >
                    <Input onChange={onParameterChanged} placeholder="Enter year" />
                </Form.Item>
            </Col>
        </Row>
        <div style={bottomParamStyle} className="bottom-parameter-fields">
            <Row>
                <Col>
                    <Form.Item name="genre" label="Genre" className='parameter-item'>
                        <Select
                            placeholder="Enter genre"
                            onChange={(value) => setSelectValue(value, 'genre')}
                            allowClear
                        >
                        {renderOptions(genres)}
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item
                        label="Director"
                        name="director"
                        className='parameter-item'
                    >
                        <Input onChange={onParameterChanged} placeholder="Enter director" />
                    </Form.Item>
                </Col>
                <Col >
                    <Form.Item
                        label="Writer"
                        name="writer"
                        className='parameter-item'
                    >
                        <Input onChange={onParameterChanged} placeholder="Enter writer" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item
                        label="Actors"
                        name="actors"
                        className='parameter-item'
                    >
                        <Input onChange={onParameterChanged} placeholder="Enter actors" />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Item
                        label="Language"
                        name="language"
                        className='parameter-item'
                    >
                        <Input onChange={onParameterChanged} placeholder="Enter language" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item
                        label="Country"
                        name="country"
                        className='parameter-item'
                    >
                        <Input onChange={onParameterChanged} placeholder="Enter country" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name="rated" label="Rated" className='parameter-item'>
                        <Select
                            placeholder="Enter rated"
                            onChange={(value) => setSelectValue(value, 'rated')}
                            allowClear
                        >
                        {renderOptions(ratings)}
                        </Select>
                    </Form.Item>
                </Col>
                <Col className='parameter-item'>
                    <Form.Item name="type" label="Type">
                        <Select
                            placeholder="Enter type"
                            onChange={(value) => setSelectValue(value, 'type')}
                            allowClear
                        >
                        <Option value="movie">Movie</Option>
                        <Option value="series">Series</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </div>
        <a onClick={toggleShowAll} style={{ marginLeft: '33%'}}>{`${toggleLabel} all options`}</a>
        <Row>
            <Col className="parameter-button-container">
                <Button className='primary-button' onClick={filterData}>Filter</Button>
                <Button className='primary-button' onClick={refresh}>Refresh</Button>
                <Button className='primary-button' onClick={openModal}>Add new</Button>
            </Col>
        </Row>
    </Form>
  );
};

export default ParameterFields;