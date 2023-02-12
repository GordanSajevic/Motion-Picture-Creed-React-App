import { IScreenShow } from '../../model/ScreenShow';
import { IRate } from './../../model/Rate';
import { List } from "antd";

const renderRates = (rates: IRate[]) => {
    return rates.map(rate => {
        return renderScreenShowItem(rate?.value, rate?.source?.name);
        });
}

const renderScreenShowItem = (value: any, field: string) => {
    return value && <List.Item style={{display: 'block'}}>
        <div style={{fontWeight: 'bold'}}>{field}</div>
        <div>{value}</div>
    </List.Item>
}

export const ScreenShowData = ({ screenShow }: { screenShow: IScreenShow}) => {
    return (
    <div className='screen-show-data'>
        <List className="screen-show-data-list">
            {renderScreenShowItem(screenShow.type, "Type")}
            {renderScreenShowItem(screenShow.runtime, "Runtime")}
            {renderScreenShowItem(screenShow.genre, "Genre")}
            {renderScreenShowItem(screenShow.director, "Director")}
            {renderScreenShowItem(screenShow.writer, "Writer")}
            {renderScreenShowItem(screenShow.actors, "Actors")}
        </List>
        <List className="screen-show-data-list-middle">
            {renderScreenShowItem(screenShow.language, "Language")}
            {renderScreenShowItem(screenShow.country, "Country")}
            {renderScreenShowItem(screenShow.rated, "Rated")}
            {renderScreenShowItem(screenShow.plot, "Plot")}
            {renderScreenShowItem(screenShow.awards, "Awards")}
        </List>
        <List className="screen-show-data-list">
            {renderScreenShowItem(screenShow.imdbVotes, "Imdb votes")}
            {renderScreenShowItem(screenShow.boxOffice, "Box office")}
            {renderRates(screenShow.rates)}
            {renderScreenShowItem(screenShow.averageRate, "Average rate")}
        </List>
    </div>
    )
}

export default ScreenShowData;