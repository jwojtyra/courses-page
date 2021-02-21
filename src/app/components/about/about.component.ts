import {Component} from '@angular/core';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public faExternalLink = faExternalLinkAlt;
}
