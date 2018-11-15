import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  clear(){
    sessionStorage.clear();
    localStorage.clear();
  }

  //Session Storage
  saveSession(key: string, data){
    sessionStorage.setItem(key, this.getSessionSettable(this.getSessionGettable(data)));
  }

  readSession(key: string){
    return this.getSessionGettable(sessionStorage.getItem(key));
  }

  removeSession(key: string){
    sessionStorage.removeItem(key);
  }

  private getSessionSettable(value: any): string{
    return typeof value === 'string' ? value : JSON.stringify(value);
  }

  private getSessionGettable(value: string): any{
    try{
      return JSON.parse(value);
    } catch (e){
      console.error(e);
      return value;
    }
  }

  //Local Storage
  saveLocal(key: string, data){
    localStorage.setItem(key, this.getLocalSettable(this.getLocalGettable(data)));
  }

  readLocal(key: string){
    return this.getLocalGettable(localStorage.getItem(key));
  }

  removeLocal(key: string){
    localStorage.removeItem(key);
  }

  private getLocalSettable(value: any): string{
    return typeof value === 'string' ? value : JSON.stringify(value);
  }

  private getLocalGettable(value: string): any{
    try{
      return JSON.parse(value);
    } catch (e){
      console.error(e);
      return value;
    }
  }
  
}
