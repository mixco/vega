import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetMenuService } from '../shared/services/menu.service';
import { LanguageService } from '../shared/services/language.service';
import { Home } from '../shared/model/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  home: Home;

  constructor(private getMenuService: GetMenuService,
              private languageService: LanguageService,
              ) { }

  ngOnInit() {
      this.getHomePage();
      this.languageService.detectLanguageChange
      .subscribe(message => {
       console.log(message);
       this.getHomePage();
      });  
  }

  getHomePage(){
    const url = 'home.json';
    this.getMenuService.getContent(url)
      .subscribe(c => {
        this.home = c;
        console.log(this.home);
      });
  }

  public ngOnDestroy() {
  }
}
