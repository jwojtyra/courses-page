import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private viewportScroller: ViewportScroller) {
  }

  public onClickNavItem(targetId: string): void {
    this.viewportScroller.scrollToAnchor(targetId);
  }
}
