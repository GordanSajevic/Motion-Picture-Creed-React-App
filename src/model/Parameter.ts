import Model from "../common/Model";

export interface TScreenShow {
  title: string;
  year: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  language: string;
  country: string;
  rated: string;
  type: string;
}

export interface IScreenShow extends TScreenShow {}

const ScreenShow = Model((model: TScreenShow): IScreenShow => {
  const _value: TScreenShow = Object.assign({}, model);

  let _model = {
    get title() {
      return _value.title;
    },
    set title(value) {
      _value.title = value;
    },
    get year() {
      return _value.year;
    },
    set year(value) {
      _value.year = value;
    },
    get genre() {
      return _value.genre;
    },
    set genre(value) {
      _value.genre = value;
    },
    get director() {
      return _value.director;
    },
    set director(value) {
      _value.director = value;
    },
    get writer() {
      return _value.writer;
    },
    set writer(value) {
      _value.writer = value;
    },
    get actors() {
      return _value.actors;
    },
    set actors(value) {
      _value.actors = value;
    },
    get language() {
      return _value.language;
    },
    set language(value) {
      _value.language = value;
    },
    get country() {
      return _value.country;
    },
    set country(value) {
      _value.country = value;
    },
    get rated() {
      return _value.rated;
    },
    set rated(value) {
      _value.rated = value;
    },
    get type() {
      return _value.type;
    },
    set type(value) {
      _value.type = value;
    },
  };

  return _model;
});

export default ScreenShow;
