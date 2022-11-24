import { IScreenShow } from '../../model/ScreenShow';
import ListGroup from 'react-bootstrap/ListGroup';
import { IRate } from './../../model/Rate';

const renderRates = (rates: IRate[]) => {
    return rates.map(rate => {
        return <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold">{rate?.source?.name}</div>
                {rate?.value}
            </div>
        </ListGroup.Item>
        });
}

export const ScreenShowData = ({ screenShow }: { screenShow: IScreenShow}) => {
    return (
    <div className='screen-show-data'>
        <ListGroup as="ol">
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Type</div>
                {screenShow.type}
                </div>
            </ListGroup.Item>
            {screenShow.runtime && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Runtime</div>
                {`${screenShow.runtime} min`}
                </div>
            </ListGroup.Item>}
            {screenShow.genre !== 'N/A' && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Genre</div>
                {screenShow.genre}
                </div>
            </ListGroup.Item>}
            {screenShow.director !== 'N/A' && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Director</div>
                {screenShow.director}
                </div>
            </ListGroup.Item>}
            {screenShow.writer !== 'N/A' && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Writer</div>
                {screenShow.writer}
                </div>
            </ListGroup.Item>}
            {screenShow.actors !== 'N/A' &&  <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Actors</div>
                {screenShow.actors}
                </div>
            </ListGroup.Item>}
        </ListGroup>
        <ListGroup as="ol">
            {screenShow.language !== 'N/A' && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Language</div>
                {screenShow.language}
                </div>
            </ListGroup.Item>}
            {screenShow.country !== 'N/A' && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Country</div>
                {screenShow.country}
                </div>
            </ListGroup.Item>}
            {screenShow.rated !== 'N/A' && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Rated</div>
                {screenShow.rated}
                </div>
            </ListGroup.Item>}
            {screenShow.plot !== 'N/A' && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto" style={{ maxWidth: '35em' }}>
                    <div className="fw-bold">Plot</div>
                    {screenShow.plot}
                </div>
            </ListGroup.Item>}
            {screenShow.awards !== 'N/A' && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Awards</div>
                {screenShow.awards}
                </div>
            </ListGroup.Item>}
        </ListGroup>
        <ListGroup as="ol">
            {screenShow.imdbVotes && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Imdb votes</div>
                {screenShow.imdbVotes}
                </div>
            </ListGroup.Item>}
            {screenShow.boxOffice && <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Box office</div>
                {screenShow.boxOffice.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    }
                )}
                </div>
            </ListGroup.Item>
            }
            {renderRates(screenShow.rates)}
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Average rate</div>
                        {screenShow.averageRate}
                    </div>
            </ListGroup.Item>
            </ListGroup>
    </div>
    )
}

export default ScreenShowData;