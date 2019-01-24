import { Component, OnInit } from '@angular/core';
import { GetMenuService } from '../shared/services/menu.service';
import { GetConfigService } from '../shared/services/config.service';
import { Menu } from '../shared/model/menu';
import { LanguageService } from '../shared/services/language.service';
import { ResourcesService } from '../shared/services/resources.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: Menu[];
  languages = [];
  selected = 'en';
  activeItemId = 0;
  isCollapsed = true;

  constructor(private getMenuService: GetMenuService,
    private getConfigService: GetConfigService,
    private languageService: LanguageService,
    private resourcesService: ResourcesService,
    private titleService: Title) { }

  ngOnInit() {
    this.resourcesService.getContent().subscribe(
      res => {
        this.resourcesService.resource = res;
        this.titleService.setTitle(res[this.selected].app_title);
      },
      error => console.log(error)
    )
    this.getConfig();
    this.getMenu();

  }


  toggleCollapsed(id?: number): void {
    this.isCollapsed = !this.isCollapsed;
    if (id) {
      this.activeItemId = id;
    }
  }

  getConfig() {
    this.getConfigService.getContent()
      .subscribe(c => {
        this.languages = c.languages;
        this.getConfigService.setConfig(c);
      });
  }

  getMenu() {
    const url = 'menu.json';
    this.getMenuService.getContent(url)
      .subscribe(c => {
        this.menu = c;
        this.saveMenu();
        // console.log(this.menu);
      });
  }

  saveMenu() {
    this.getMenuService.saveMenu(this.menu);
  }

  getMenuItemById(id) {
    const a = this.getMenuService.getSubMenu(id);
    console.log(a);
  }

  switchLanguage(lang: string) {
    this.selected = lang;
    this.languageService.setLanguage(lang);
    this.getMenu();
    // console.log(this.location.path());
    // const url =  this.location.path();
    // this.location.replaceState(this.location.path(), '?r=1');
    //  this.router.navigate([url], {queryParams: {refresh:1}});
    // this.router.navigateByUrl(url);
  }


}
