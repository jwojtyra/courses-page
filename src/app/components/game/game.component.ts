import {Component} from '@angular/core';
import {faPhp, faJs, faAngular, faHtml5, faCss3, faSass, faGitAlt, faDocker} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  public faPhp = faPhp;
  public faAngular = faAngular;
  public faJs = faJs;
  public faHtml = faHtml5;
  public faCss = faCss3;
  public faSass = faSass;
  public faGit = faGitAlt;
  public faDocker = faDocker;
}
