import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  replacer(str) {
    const found = str.substr(0, str.length - 1);
    // alert(`Found found at position ${offset} in string ${s}`);
    const retVal = '<a href=\'' + found + '\' target=\'_blank\'>' + found + '</a>';
    return retVal;
  }

  linker(str) {
    // details/22|gees
    const found = str.substr(6, str.length - 7).split('|');
    console.log(found);
    // To use internal navigate method
    // const retVal = '<a (click)=\"navigateToDetail(' + found[0] + ')\">' + found[1] + '</a>';

    // To use routerLink directive, two flavours
    // const retVal = '<a [routerLink]=\"[\'' + found[0] + '\']\">' + found[1] + '</a>';
    const retVal = '<a [routerLink]=\"' + found[0] + '\">' + found[1] + '</a>';
    console.log(retVal);
    return retVal;
  }
}
