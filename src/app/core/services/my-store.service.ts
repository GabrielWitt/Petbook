import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class MyStoreService {
  webStorage = window.localStorage;

  constructor(private nativeStorage: NativeStorage) { }

  async setData(filename:string, data: any){
    try {
      if (Capacitor.getPlatform() !== 'web'){ await this.nativeStorage.setItem( filename, data ); }
      else { this.webStorage.setItem(filename, JSON.stringify(data)) }
      return 'ok'
    } catch (error) {
      console.log(error);
      return 'data not saved';
    }
  }

  async readFile(filename:string){
    try {
      if (Capacitor.getPlatform() !== 'web'){ 
        const { value } = await this.nativeStorage.getItem(filename);
        return JSON.parse(value);
      } else {
        const value = await this.webStorage.getItem(filename)
        return JSON.parse(value);
      }
    } catch (error) {
      console.log(error);
      return 'file not found';
    }
  }

  async removeFile(filename:string){
    try {
      if (Capacitor.getPlatform() !== 'web'){ 
        await this.nativeStorage.remove(filename);
      } else {
        await this.webStorage.removeItem(filename)
      }
      return 'file removed'
    } catch (error) {
      console.log(error);
      return 'file not found';
    }
  }

  async cleanAllData(){
    try {
      if (Capacitor.getPlatform() !== 'web'){ 
        await this.nativeStorage.clear();
      } else {
        await this.webStorage.clear();
      }
      return 'file removed'
    } catch (error) {
      console.log(error);
      return 'file not found';
    }
  }
}
