import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import ScreenShowsPage, { IScreenShowsPage } from '../model/ScreenShowsPage';
import ScreenShowService, { IScreenShowService } from './../service/ScreenShowService';

const initialState: IScreenShowsPage = ScreenShowsPage({screenShowList: [], pageNumber: 1, count: 0});
const screenShowService: IScreenShowService = ScreenShowService();

export const fetchScreenShows = createAsyncThunk('screenShows/fetchScreenShows', async (params: any) => {
    const response = await screenShowService.getAllScreenShows(params.parameters, params.pageNumber);
    return response;
})

export const createScreenShow = createAsyncThunk(
    'screenShows/createScreenShow',
    async (params: {title: string, year: string}) => {
      const response = await screenShowService.findAndInsertScreenShow(params.title, params.year);
      return response;
    }
  )

const ScreenShowSlice = createSlice({
    name: 'screenShows',
    initialState,
    reducers: {
        updateScreenShowList(state, action: PayloadAction<IScreenShowsPage>){
            const screenShowsPage = action.payload;
            let existingScreenShowsPage = state;
            existingScreenShowsPage = screenShowsPage;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchScreenShows.fulfilled, (state, action) => {
            const screenShowsPage = action.payload;
            let existingScreenShowsPage = state;
            existingScreenShowsPage = screenShowsPage;
            return existingScreenShowsPage; 
          })
        builder.addCase(createScreenShow.fulfilled, (state, action) => {
            let existingScreenShowsPage = state;
            return existingScreenShowsPage; 
          })
    }
})

export const { updateScreenShowList } = ScreenShowSlice.actions;

export default ScreenShowSlice.reducer;