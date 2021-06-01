import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._isAdmin = false;
    this._id = null;
    this._loading = true;
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }

  setIsAdmin(admin) {
    this._isAdmin = admin;
  }

  setUserId(id) {
    this._id = id;
  }

    setLoading(bool) {
    this._loading = bool;
  }

  get isAdmin() {
    return this._isAdmin;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }

  get userId() {
    return this._id;
  }

  get isLoading() {
    return this._loading;
  }

}
