import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpperComponent } from './upper/upper.component';
import { MidComponent } from './mid/mid.component';
import { LowerComponent } from './lower/lower.component';
import { FooterComponent } from './footer/footer.component';
import { MidLowerComponent } from './mid-lower/mid-lower.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UpperComponent,
    MidComponent,
    LowerComponent,
    FooterComponent,
    MidLowerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
