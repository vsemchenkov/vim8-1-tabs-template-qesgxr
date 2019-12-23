import { Component } from '@angular/core';

@Component({
  selector: 'new-tabs',
  templateUrl: './newTabs.component.html',
  styleUrls: [ './newTabs.component.css' ]
})
export class newTabsComponent  {

  public newtabs = [ 1, 2 ];

  public isActiveTab (newtabsID) {
     if(newtabsID == 1) {
       return true;
     }
  }

  public newdec() {
    this.newtabs = this.newtabs.slice(0, -1);
  }

  public newinc() {
    this.newtabs = [ ...this.newtabs, (this.newtabs.length + 1) ];
  }
}
