import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {PortalModule} from '@angular/cdk/portal';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { newTabsComponent } from './newTabs/newTabs.component';


@NgModule({
  exports: [ MatTabsModule ],
  imports:      [ BrowserModule, FormsModule, PortalModule],
  declarations: [ AppComponent, HelloComponent, TestComponent, newTabsComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
