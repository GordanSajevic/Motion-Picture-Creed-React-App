import ScreenShow, { IScreenShow } from '../model/ScreenShow';
import ScreenShowsPage, { IScreenShowsPage } from '../model/ScreenShowsPage';

export interface IScreenShowService {
    getAllScreenShows(parameters: any[], pageNumber: number): Promise<IScreenShowsPage>;
    findAndInsertScreenShow(title: string, year?: string): Promise<IScreenShow>;
}

const ScreenShowService = (): IScreenShowService => {

    return {
        async getAllScreenShows(parameters: any[], pageNumber: number){
            let queryString = `?pageNumber=${pageNumber}`;
            for(let i = 0; i < parameters.length; i++){
                let name = Object.getOwnPropertyNames(parameters[i])[0];
                if(parameters[i][Object.keys(parameters[i])[0]] !== ''){
                    queryString += `&${name}=${parameters[i][name]}`
                }
            }
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let response = await fetch(`/api/screen-shows${queryString}`, requestOptions);

            const jsonResponse = await response.json();

            var result = ScreenShowsPage(jsonResponse);
            let list = result?.screenShowList?.map((item: any) => ScreenShow(item));
            result.screenShowList = list;
            return result;
        },

        async findAndInsertScreenShow(title: string, year: string = ''){
            let queryString = `?title=${title}`;
            if(year !== ''){
                queryString += `&year=${year}`;
            }
            const requestOptions = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let response = await fetch(`/api/screen-shows${queryString}`, requestOptions);
            const jsonResponse = await response.json();

            return ScreenShow(jsonResponse);
        }
    }
};

export default ScreenShowService;