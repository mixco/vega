import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetMenuService } from './shared/services/menu.service';
import { GetConfigService } from './shared/services/config.service';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LanguageService } from './shared/services/language.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    // NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GetMenuService,
    GetConfigService,
    LanguageService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
