import Model from "../common/Model";
import { IScreenShow } from "./ScreenShow";

export interface TScreenShowsPage{
  screenShowList: IScreenShow[];
  pageNumber: number;
  count: number;
}

export interface IScreenShowsPage  extends TScreenShowsPage  {}

const ScreenShowsPage = Model((model: TScreenShowsPage): IScreenShowsPage => {
    const _value: TScreenShowsPage = Object.assign({}, model);
  
    let _model = {
      get screenShowList() {
        return _value.screenShowList;
      },
      set screenShowList(value) {
        _value.screenShowList = value;
      },
      get pageNumber() {
        return _value.pageNumber;
      },
      set pageNumber(value) {
        _value.pageNumber = value;
      },
      get count() {
        return _value.count;
      },
      set count(value) {
        _value.count = value;
      },
    };
  
    return _model;
  });
  
  export default ScreenShowsPage;
  