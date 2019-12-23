import { Component } from '@angular/core';

@Component({
  selector: 'new-tabs',
  templateUrl: './newTabs.component.html',
  styleUrls: [ './newTabs.component.css' ]
})
export class newTabsComponent  {
  public isDefault (newtabsID) {
      if (newtabsID == 1) {
        return true;
      } else {
        return false;
      }
  };

  public newtabs = [ 1, 2 ];

  public changeTabs (newtabsID) {
      
  } 

  public newdec() {
    this.newtabs = this.newtabs.slice(0, -1);
  }

  public newinc() {
    this.newtabs = [ ...this.newtabs, (this.newtabs.length + 1) ];
  }
}
