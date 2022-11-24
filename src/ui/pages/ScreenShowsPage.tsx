import { useState, useEffect } from 'react';
import { IScreenShow } from '../../model/ScreenShow';
import { fetchScreenShows, createScreenShow } from '../../common/ScreenShowSlice'
import type { RootState } from '../../common/Store';
import { useAppSelector, useAppDispatch } from '../../common/Hooks'
import Accordion from 'react-bootstrap/Accordion';
import ScreenShowData from '../components/ScreenShowData';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParameterFields from '../components/ParameterFields';
import AddNewForm from '../components/AddNewForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';

Modal.setAppElement('#root');
var Loader = require('react-loader');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '2.5px solid rgb(71, 138, 201)',
      borderRadius: '5px'
    },
  };

export const ScreenShowList = () => {

    const screenShowsPage = useAppSelector((state: RootState) => { return state.screenShows });
    const [parameters, setParameters] = useState([{title: ''}, {year: ''}, {genre: ''}, {director: ''},
    {writer: ''}, {actors: ''}, {language: ''}, {country: ''}, {rated: ''}, {type: 'movie'}]);
    const [addNewVisible, setAddNewVisible] = useState(false);
    const [titleParam, setTitleParam] = useState('');
    const [yearParam, setYearParam] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useAppDispatch();

    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        fetchData();
      }, []); 

    const renderScreenShows = () => {
        return screenShowsPage?.screenShowList?.map((item: IScreenShow) => {
            return (
                <Accordion className='screen-show-list'>
                    <Accordion.Item eventKey={item.id.toString()}>
                        <Accordion.Header style={{backgroundColor: '#478ac9'}}>
                        <img src={item.poster} className='screen-show-image' />
                            <div>
                            <h3>{`${item.title} (${item.year})`}</h3>
                            {item.genre !== 'N/A' && <p>{item.genre}</p>}
                            {item.plot !== 'N/A' && <p>{item.plot}</p>}
                            <p className='screen-show-rating'>Average Rating: {`${item.averageRate}`}</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ScreenShowData screenShow={item} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>)
        })
    }

    const onParameterChanged = (e: any) => {setParameterValue(e.target.value, e.target.id)};

    const onTitleChanged = (e: any) => {setTitleParam(e.target.value)};

    const onYearChanged = (e: any) => {setYearParam(e.target.value)};

    const setParameterValue = (value: string, field: string) => {
        parameters.forEach(item => {
            if (Object.getOwnPropertyNames(item)[0] === field){
                type ObjectKey = keyof typeof item;
                const name = field as ObjectKey;
                item[name] = value;
            }
        })
        setParameters(parameters);
    }

    const addNewScreenShow = async () => {
        closeModal();
        setLoaded(false);
        let response = await dispatch(createScreenShow({title: titleParam, year: yearParam}));
        let screenShow: any = response.payload;
        if(screenShow && screenShow?.title){
            let parameters = [{title: screenShow.title}, {year: screenShow.year}, {genre: ''}, 
            {director: ''}, {writer: ''}, {actors: ''}, {language: ''}, 
            {country: ''}, {rated: ''}, {type: ''}];
             dispatch(fetchScreenShows({parameters, pageNumber: 1}));
        }
        setLoaded(true);
        
    }

    const renderParameterFields = () => {
        return <ParameterFields onParameterChanged={onParameterChanged} 
        filterData={filterData} refresh={refresh} />
    }

    const filterData = async () => {
        let pageNum = 1;
        let response = await dispatch(fetchScreenShows({parameters, pageNumber}));
        if(response){
            setLoaded(true);
        }
    }

    const fetchData = async () => {
        let response = await dispatch(fetchScreenShows({parameters, pageNumber}));
        if(response){
            setLoaded(true);
        }
    };

    const refresh = () => {
        window.location.reload();
    };

    const addPageNumber = async () => {
        switchPageNumber(pageNumber + 1);
    }

    const subtractPageNumber = async () => {
        switchPageNumber(pageNumber - 1);
    }

    const switchPageNumber = async (pageNumber: number) => {
        setLoaded(false);
        setPageNumber(pageNumber);
        let response = await dispatch(fetchScreenShows({parameters, pageNumber}));
        if(response){
            setLoaded(true);
        }
    }

    const renderPagingButtons = () => {
        if(screenShowsPage.count === 0){
            return <div></div>
        }
        var pageCount = Math.floor(screenShowsPage.count / 10);
        if(screenShowsPage.count % 10 !== 0){
            pageCount++;
        }
        let pageButtons: number[] = [];
        for(let i = 1; i <= pageCount; i++){
            pageButtons.push(i);
        }
        let boldStyle = { fontWeight: '1000', backgroundColor: 'lightblue'};
        let style = {};            
        if(pageCount <= 10){
            return pageButtons.map((item) => {
                return <div className='page-numbers' style={item === pageNumber ? boldStyle : style} 
                onClick={() => switchPageNumber(item)}>{item}</div>
            })
        }

        let buttons = pageButtons.map((item) => {
            if(item === 1 && pageNumber >= 6){
                return <div style={{display: 'flex'}}><div key={item} className='page-numbers' style={item === pageNumber ? boldStyle : style} 
                onClick={() => switchPageNumber(item)}>{item}</div>
                <div className="page-dots">{"\u00a0\u00a0\u00a0"}.{"\u00a0"}.{"\u00a0"}.</div></div>
            }
            else if(item === 1){
                return <div key={item} className='page-numbers' style={item === pageNumber ? boldStyle : style} 
                onClick={() => switchPageNumber(item)}>{item}</div>
            }
            if(item >= pageNumber - 3 && item <= pageNumber + 3){
                return <div key={item} className='page-numbers' style={item === pageNumber ? boldStyle : style} 
                onClick={() => switchPageNumber(item)}>{item}</div>
            }   
            if(item === pageCount && pageNumber <= pageCount - 5){
                return <div style={{display: 'flex'}}><div className="page-dots">{"\u00a0\u00a0\u00a0"}.{"\u00a0"}.{"\u00a0"}.</div>
                <div key={item} className='page-numbers' style={item === pageNumber ? boldStyle : style} 
                onClick={() => switchPageNumber(item)}>{item}</div>
                </div>
            }
            else if(item === pageCount){
                return <div key={item} className='page-numbers' style={item === pageNumber ? boldStyle : style} 
                onClick={() => switchPageNumber(item)}>{item}</div>
            }
        });
        return buttons;      
    }

    let pageCount = Math.floor(screenShowsPage.count / 10);
    if(screenShowsPage.count % 10 !== 0){
        pageCount++;
    }

    return (
      <div>
          {renderParameterFields()}
          {!addNewVisible &&
            <div className='add-new-container'>Can't see your favourite movie or TV show? 
                <Button variant="primary" className='parameter-button' onClick={openModal}>Add it</Button>
                </div>
            }
            <Loader loaded={loaded}>
                {renderScreenShows()}
                <div style={{display: 'flex', maxWidth: '750px', margin: 'auto'}}>
                {pageNumber !== 1 && pageNumber !== pageCount &&
                <div style={{display: 'flex'}}>
                    <p className="page-buttons" onClick={subtractPageNumber}>Previous</p> 
                    {renderPagingButtons()}
                    <p className="page-buttons" onClick={addPageNumber}>Next</p>
                </div>
                }
                {pageNumber === 1 && pageCount > 1 && pageNumber !== pageCount &&
                <div style={{display: 'flex'}}>{renderPagingButtons()}
                    <p className="page-buttons" onClick={addPageNumber}>Next</p>
                    </div>
                }
                {pageNumber === pageCount && pageNumber !== 1 &&
                <div style={{display: 'flex'}}>
                    <p className="page-buttons" onClick={subtractPageNumber}>Previous</p> 
                    {renderPagingButtons()}
                </div>
                }
                </div>
            </Loader>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            >
                <AddNewForm addNewScreenShow={addNewScreenShow} hideAddNewForm={closeModal} 
                    onTitleChanged={onTitleChanged} onYearChanged={onYearChanged} />
            </Modal>
      </div>
    );
  }

  export default ScreenShowList;