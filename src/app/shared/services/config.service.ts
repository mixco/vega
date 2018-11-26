import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable()
export class GetConfigService {

  _config = [];

  constructor(private _http: HttpClient) { }

  getContent(): Observable<any> {
    const url = './assets/config.json';
    return this._http.get(url);
    // return this._http.get(this._url).pipe(map(response => response));
  }

  setConfig(value: any[]){
    this._config = value;
  }


}
