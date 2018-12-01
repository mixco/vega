import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  replacer(str) {
    const found = str.substr(0, str.length-1);
    // alert(`Found found at position ${offset} in string ${s}`);
    const retVal = "<a href='"+ found +"' target='_blank'>" + found + "</a>"
    return retVal;
  }
}
