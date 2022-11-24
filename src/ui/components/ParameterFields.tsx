import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let genres = ['', 'Crime', 'Drama', 'Action', 'Thriller', 'Horror', 'Fantasy', 'Animation', 'Comedy', 'Romance', 'War',
    'Mystery', 'Adventure', 'Film-Noir', 'Western', 'Sci-Fi', 'Biography', 'Sport', 'History', 'Family', 'Short', 'Music'].sort();
let ratings = ['','Approved', 'G', 'PG', 'PG-13', 'R', 'TV-MA', 'TV-PG', 'TV-Y7', 'TV-14'];

export const ParameterFields = ({ onParameterChanged, filterData, refresh }: 
    { onParameterChanged: any, filterData: any, refresh: any}) => {

    const renderOptions = (options: any[]) => {
        return options.map(item => {
            return <option value={item}>{item}</option>
        });
    }

  return (
    <div className='parameter-form'>
        <Form>
            <Row>
                <Col>
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={onParameterChanged} id='title' type="text" placeholder="Enter title" />
                </Col>
                <Col>
                    <Form.Label>Year</Form.Label>
                    <Form.Control onChange={onParameterChanged} id='year' type="number" placeholder="Enter year" />
                </Col>
                <Col>
                    <Form.Label>Genre</Form.Label>
                    <Form.Select onChange={onParameterChanged} id='genre' aria-label="Enter genre">
                        {renderOptions(genres)}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label>Director</Form.Label>
                    <Form.Control onChange={onParameterChanged} id='director' type="text" placeholder="Enter director" />
                </Col>
                <Col>
                    <Form.Label>Writer</Form.Label>
                    <Form.Control onChange={onParameterChanged} id='writer' type="text" placeholder="Enter writer" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Actors</Form.Label>
                    <Form.Control onChange={onParameterChanged} id='actors' type="text" placeholder="Enter actors" />
                </Col>
                <Col>
                    <Form.Label>Language</Form.Label>
                    <Form.Control onChange={onParameterChanged} id='language' type="text" placeholder="Enter language" />
                </Col>
                <Col>
                    <Form.Label>Country</Form.Label>
                    <Form.Control onChange={onParameterChanged} id='country' type="text" placeholder="Enter country" />
                </Col>
                <Col>
                    <Form.Label>Rated</Form.Label>
                    <Form.Select onChange={onParameterChanged} id='rated'>
                        {renderOptions(ratings)}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label>Type</Form.Label>
                    <Form.Select onChange={onParameterChanged} id='type'>
                        <option value="movie">movie</option>
                        <option value="series">series</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{marginLeft: '42%'}}>
                        <Button variant="primary" className='parameter-button' onClick={filterData}>Filter</Button>
                        <Button variant="primary" className='parameter-button' onClick={refresh}>Refresh</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    </div>
  );
};

export default ParameterFields;