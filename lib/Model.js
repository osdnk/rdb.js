class Model {
  _views = new Map();
  _datas = new Map();
  getView = name =>
    this._views.get(name);
  getData = name =>
    this._datas.get(name);
}

export { Model };
