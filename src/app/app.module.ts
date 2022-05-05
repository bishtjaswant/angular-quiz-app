import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import { ChangeBgDirective } from './directives/change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    WelcomeComponent,
    HeaderComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
     FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
