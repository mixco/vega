import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetMenuService } from '../shared/services/menu.service';
import { Tab } from '../shared/model/menu';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';
import { ResourcesService } from '../shared/services/resources.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  tab: Tab[];
  resource = [];

  constructor(
    private getMenuService: GetMenuService,
    private location: Location,
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private resourcesService: ResourcesService) { }

  ngOnInit() {
    // get all resources
    this.resource = this.resourcesService.resource;
    this.getContent();
    this.languageService.detectLanguageChange
    .subscribe(message => {
    //  console.log(message);
     this.getContent();
    }); 
  }

  getContent() {
    const id = this.route.snapshot.paramMap.get('id');
    const url = 'tab' + id.substr(0, 1) + '.json';
    this.getMenuService.getContent(url)
      .subscribe(c => {
        this.tab = c.filter(item => item.pid === +id);
        // console.log('tab = ' + this.tab);
      });
  }

  getResource(name:string){
    const lng =  this.languageService.getLanguage();
    return this.resource[lng][name];
  }

  navigateBack() {
    this.location.back();
  }

}
