import ScreenShowService from './../service/ScreenShowService';
import "isomorphic-fetch";

test('getScreenShows returns more than zero', async () => {
    let screenShowService = ScreenShowService();
    let screenShows = await screenShowService.getAllScreenShows([], 1);
    expect(screenShows?.screenShowList?.length).toBeGreaterThan(0);
});