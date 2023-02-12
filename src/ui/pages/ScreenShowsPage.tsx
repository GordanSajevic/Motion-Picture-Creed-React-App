import { useState, useEffect } from 'react';
import { IScreenShow } from '../../model/ScreenShow';
import { fetchScreenShows, createScreenShow } from '../../common/ScreenShowSlice'
import type { RootState } from '../../common/Store';
import { useAppSelector, useAppDispatch } from '../../common/Hooks'
import ScreenShowData from '../components/ScreenShowData';
import ParameterFields from '../components/ParameterFields';
import AddNewForm from '../components/AddNewForm';
import Modal from 'react-modal';
import { Collapse, Row, Col, Image, Pagination } from 'antd';

Modal.setAppElement('#root');
var Loader = require('react-loader');

const { Panel } = Collapse;

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '2.5px solid rgb(71, 138, 201)',
      opacity: 1,
      transition: 'opacity 2000ms ease-in-out'
    },
  };

export const ScreenShowList = () => {
    const screenShowsPage = useAppSelector((state: RootState) => { return state.screenShows });
    const [parameters, setParameters] = useState([{title: ''}, {year: ''}, {genre: ''}, {director: ''},
    {writer: ''}, {actors: ''}, {language: ''}, {country: ''}, {rated: ''}, {type: 'movie'}]);
    const [titleParam, setTitleParam] = useState('');
    const [yearParam, setYearParam] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useAppDispatch();

    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    useEffect(() => {
        fetchData();
      }, []); 

    const renderScreenShows = () => {
        return screenShowsPage?.screenShowList?.map((item: IScreenShow) => {
            return <Collapse accordion className='screen-show-list'>
                <Panel header={
                    <div className='accordion-header'>
                        <div className='accordion-image'>
                            <Image
                                width={140}
                                src={item.poster}
                            />
                        </div>
                        <Col style={{marginLeft: '1em'}}>
                            <h2 className="accordion-title">{`${item.title} (${item.year})`}</h2>
                            {item.genre !== 'N/A' && <p>{item.genre}</p>}
                            {item.plot !== 'N/A' && <p>{item.plot}</p>}
                            <p className='screen-show-rating'>Average Rating: {`${item.averageRate}`}</p>
                        </Col>
                    </div>
                } key={item.id.toString()} showArrow={false}>
                    <Row>
                        <ScreenShowData screenShow={item} />
                    </Row>
                </Panel>
            </Collapse>;
        })
    }

    const onParameterChanged = (e: any) => {setParameterValue(e.target.value, e.target.id)};

    const setSelectValue = (value: string, field: string) => {setParameterValue(value, field)}

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
        return <ParameterFields 
                onParameterChanged={onParameterChanged} 
                setSelectValue={setSelectValue}
                filterData={filterData} 
                refresh={refresh}
                openModal={openModal}
                showAll={showAll}
                toggleShowAll={toggleShowAll}
            />
    }

    const filterData = async () => {
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

    const switchPageNumber = async (pageNumber: number) => {
        setLoaded(false);
        setPageNumber(pageNumber);
        let response = await dispatch(fetchScreenShows({parameters, pageNumber}));
        if(response){
            setLoaded(true);
        }
    }

    const changePage = (newPageNumber: number) => {
        switchPageNumber(newPageNumber);
    }


    let pageCount = Math.floor(screenShowsPage.count / 10);
    if(screenShowsPage.count % 10 !== 0){
        pageCount++;
    }
    return (
      <div>
          {renderParameterFields()}
            <Loader loaded={loaded}>
                {renderScreenShows()}
                <Pagination
                    total={pageCount * 10}
                    defaultCurrent={1}
                    current={pageNumber}
                    onChange={changePage}
                    showSizeChanger={false}
                    style={{ textAlign: 'center', height: '5em', marginTop: '2em'}}
                />
            </Loader>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={2000}
            >
                <AddNewForm addNewScreenShow={addNewScreenShow} hideAddNewForm={closeModal} 
                    onTitleChanged={onTitleChanged} onYearChanged={onYearChanged} />
            </Modal>
      </div>
    );
  }

  export default ScreenShowList;