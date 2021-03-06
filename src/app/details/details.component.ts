import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetMenuService } from '../shared/services/menu.service';
import { Tab, Menu } from '../shared/model/menu';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';
import { ResourcesService } from '../shared/services/resources.service';
// import { RoutingStateService } from '../shared/services/routing-state.service';
import { HelperService } from '../shared/services/helper.service';
import { Subject } from 'rxjs';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  tab: Tab[];
  resource = [];
  previousRoute: string;
  menuTitle = '';
  subMenuTitle = '';
  subject:Subject<any> = new Subject();

  constructor(
    private getMenuService: GetMenuService,
    private location: Location,
    private route: ActivatedRoute,
    private languageService: LanguageService,
    // private routingState: RoutingStateService,
    private helperService: HelperService,
    private resourcesService: ResourcesService,
    private modalService: NgbModal) {
      // this.routingState.loadRouting();
    }

  ngOnInit() {
    // get all resources
    this.resource = this.resourcesService.resource;
    this.getContent();
    this.languageService.detectLanguageChange
    .subscribe(message => {
    //  console.log(message);
     this.getContent();
    });
    // this.previousRoute = this.routingState.getPreviousUrl();
  }

  startModal(img:string) {
    // this.subject.next(img);
    const modalRef = this.modalService.open(ModalComponent, {backdropClass: 'light-blue-backdrop', centered: true, size: 'lg'});
    modalRef.componentInstance.name = img;
  }

  getContent() {
    const id = this.route.snapshot.paramMap.get('id');
    const url = 'tab' + id.substr(0, 1) + '.json';
    this.getMenuService.getContent(url)
    .subscribe(c => {
      this.tab = c.filter(item => item.pid === +id);
      this.setBreadCrumbs(id);
      });
  }

  setBreadCrumbs(id: string){
    const menu: Menu[] = this.getMenuService.menu;
    const menuItem:Menu =  menu.find(item => item.id === +id.substr(0,1))
    this.menuTitle = menuItem.title;
    const subItem = menuItem.submenu.find(item => item.id === +id);
    this.subMenuTitle = subItem.title;
  }


  processLinks(desc:string){
    const position = desc.search('http');
    if(position>0){
      return desc.replace(/http(.*?)(#)/g, this.helperService.replacer);
    }
      return desc;
  }

  getResource(name:string){
    const lng =  this.languageService.getLanguage();
    return this.resource[lng][name];
  }

  navigateBack() {
    this.location.back();
  }

}
