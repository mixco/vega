import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetMenuService } from '../shared/services/menu.service';
import { Menu } from '../shared/model/menu';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';
import { ResourcesService } from '../shared/services/resources.service';
import { HelperService } from '../shared/services/helper.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  resource = [];
  menu: Menu[];
  menuTitle = '';
  navigationSubscription;

  constructor(private getMenuService: GetMenuService,
    private route: ActivatedRoute,
    private router: Router,
    private resourcesService: ResourcesService,
    private helperService: HelperService,
    private languageService: LanguageService) { }

  ngOnInit() {
    // get all resources
    this.resource = this.resourcesService.resource;
    this.getContent();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getContent();
      }
    });
    this.languageService.detectLanguageChange
      .subscribe(message => {
        //  console.log(message);
        this.getContent();
      });
  }

  getContent() {
    const id = +this.route.snapshot.paramMap.get('id');
    const url = 'menu.json';
    this.menuTitle = this.getMenuService.getMenuItemById(id);
    this.getMenuService.getContent(url)
      .subscribe(c => {
        this.menu = c.find(item => item.id === id).submenu;
        console.log(this.menu);
      });
  }

  getMenuItemById(id) {
    const a = this.getMenuService.getSubMenu(id);
    console.log(a);
  }
  

  getResource(name: string) {
    const lng = this.languageService.getLanguage();
    return this.resource[lng][name];
  }

  // replacer(str, offset, s) {
  //   const found = str.substr(0, str.length-1);
  //   // alert(`Found found at position ${offset} in string ${s}`);
  //   const retVal = "<a href='"+ found +"' target='_blank'>" + found + "</a>"
  //   return retVal;
  // }

  processLinks(desc: string) {
  // processLinks(descLink: string) {
    // const desc = this.processInternalLinks(descLink);
    const position = desc.search('http');
    if (position > 0) {
      const final = desc.replace(/http(.*?)(#)/g, this.helperService.replacer);
      console.log(final);
      return final;
    }
    return desc;
  }

  processInternalLinks(desc: string) {
    const position = desc.search('ittp');
    if (position > 0) {
      return desc.replace(/ittp(.*?)(#)/g, this.helperService.linker);
    }
    return desc;
  }

  ngOnDestroy() {

    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  navigateToDetail(id) {
    // this.router.navigate(['/details', id]);
    this.router.navigate(['/details', id]).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err);  // when there's an error
    });
  }

}
