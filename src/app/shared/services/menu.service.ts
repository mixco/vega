import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Menu } from '../model/menu';
import { LanguageService } from './language.service';

@Injectable()
export class GetMenuService {

  menu: Menu[];

  constructor(private _http: HttpClient,
              private languageService: LanguageService) { }

  getContent(path: string): Observable<any> {
    const currentLanguage  = this.languageService.getLanguage();
    const url = './assets/data/'+ currentLanguage +'/'+ path;
    return this._http.get(url);
    // return this._http.get(this._url).pipe(map(response => response));
  }

  getSubMenu(id: number): Menu {
    return this.menu.find(item => item.id === id);
  }

  saveMenu(menu) {
    this.menu = menu;
  }

  getMenuItemById(id:number){
    return this.menu[id].title;
  }
}
