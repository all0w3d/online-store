import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._devices = [];
    this._price = 0;
    this._quantity = 0;

    makeAutoObservable(this);
  }

  setDevices(devices) {
    this._devices.push(devices);
  }

  setPrice(price) {
    this._price += price;
  }

  setQuantity(quantity) {
    this._quantity += quantity;
  }

  get devices() {
    return this._devices;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }
}
