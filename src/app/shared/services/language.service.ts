import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  subject = new BehaviorSubject<boolean>(false);
  detectLanguageChange = this.subject.asObservable();
  isLangChanged = false;

  language = 'en';
  constructor() { }

  getLanguage(){
    // this.subject.complete();
    return this.language; 
  }

  setLanguage(lng:string){
    this.language = lng;
    this.subject.next(!this.isLangChanged);
  }

}
