import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private _resources = [];
  constructor(private _http: HttpClient) { }

  getContent(): Observable<any> {
    const url = './assets/resources.json';
    return this._http.get(url);
  }

  get resource(){
    return this._resources;
  }

  set resource(res){
    this._resources = res;
  }

}
