import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { OtherComponent } from './home/other/other.component';
import { EducationComponent } from './home/education/education.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QualificationComponent } from './home/education/qualification/qualification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    OtherComponent,
    EducationComponent,
    QualificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
