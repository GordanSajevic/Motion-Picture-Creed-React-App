import Model from "../common/Model";

export interface TSource {
  id: number;
  name: string;
  valid: boolean;
}

export interface ISource extends TSource  {}

const Source = Model((model: TSource): ISource => {
  const _value: TSource = Object.assign({}, model);

  let _model = {
    get id() {
      return _value.id;
    },
    set id(value) {
      _value.id = value;
    },
    get name() {
      return _value.name;
    },
    set name(value) {
      _value.name = value;
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

export default Source;
