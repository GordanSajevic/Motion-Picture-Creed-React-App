import Model from "../common/Model";
import { ISource } from "./Source";

export interface TRate {
  id: number;
  source: ISource;
  value: number;
  valid: boolean;
}

export interface IRate  extends TRate  {}

const Rate = Model((model: TRate): IRate => {
  const _value: TRate = Object.assign({}, model);

  let _model = {
    get id() {
      return _value.id;
    },
    set id(value) {
      _value.id = value;
    },
    get source() {
      return _value.source;
    },
    set source(value) {
      _value.source = value;
    },
    get value() {
      return _value.value;
    },
    set value(value) {
      _value.value = value;
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

export default Rate;
