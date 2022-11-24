import Model from "../common/Model";
import { IRate } from "./Rate";

export interface TScreenShow {
  id: number;
  title: string;
  year: string;
  runtime: number;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  language: string;
  country: string;
  rated: string;
  type: string;
  released: Date;
  plot: string;
  awards: string;
  imdbVotes: number;
  boxOffice: number;
  production: string;
  poster: string;
  rates: IRate[];
  averageRate: string;
  valid: boolean;
}

export interface IScreenShow extends TScreenShow {}

const ScreenShow = Model((model: TScreenShow): IScreenShow => {
  const _value: TScreenShow = Object.assign({}, model);

  let _model = {
    get id() {
      return _value.id;
    },
    set id(value) {
      _value.id = value;
    },
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
    get runtime() {
      return _value.runtime;
    },
    set runtime(value) {
      _value.runtime = value;
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
    get released() {
      return _value.released;
    },
    set released(value) {
      _value.released = value;
    },
    get plot() {
      return _value.plot;
    },
    set plot(value) {
      _value.plot = value;
    },
    get awards() {
      return _value.awards;
    },
    set awards(value) {
      _value.awards = value;
    },
    get imdbVotes() {
      return _value.imdbVotes;
    },
    set imdbVotes(value) {
      _value.imdbVotes = value;
    },
    get boxOffice() {
      return _value.boxOffice;
    },
    set boxOffice(value) {
      _value.boxOffice = value;
    },
    get production() {
      return _value.production;
    },
    set production(value) {
      _value.production = value;
    },
    get rates() {
      return _value.rates;
    },
    set rates(value) {
      _value.rates = value;
    },
    get averageRate() {
      var sum = 0;
      _value?.rates?.forEach(rate => {
        sum += rate?.value;  
      });
      var averageRate = sum / _value?.rates?.length;
      return averageRate.toFixed(2);
    },
    get poster() {
      return _value.poster;
    },
    set poster(value) {
      _value.poster = value;
    },
    get valid() {
      return _value.valid;
    },
    set valid(value) {
      _value.valid = value;
    },
  };

  return _model;
});

export default ScreenShow;
