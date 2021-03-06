import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navItems: {label: string, anchor: string}[] = [
    {label: 'O nas', anchor: 'onas'},
    {label: 'Szkolenia', anchor: 'szkolenia'},
    {label: 'Kontakt', anchor: 'kontakt'},
  ];

  constructor(private viewportScroller: ViewportScroller) {
  }

  public onClickNavItem(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
