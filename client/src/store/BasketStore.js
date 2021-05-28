import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._devices = [];
    this._price = 0;
    this._id = null;

    makeAutoObservable(this);
  }

  setDevices(devices) {
    this._devices.push(devices);
  }

  setPrice(price) {
    this._price += price;
  }

  clearBasket() {
    this._devices = [];
    this._price = 0;
  }

  setId(id) {
    this._id = id;
  }

  get devices() {
    return this._devices;
  }

  get price() {
    return this._price;
  }

  get id() {
    return this._id;
  }
}
