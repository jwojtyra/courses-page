import {Component} from '@angular/core';
import {faPhp, faAngular} from '@fortawesome/free-brands-svg-icons';
import {faClock, faCalendar, faMoneyBillAlt, faCreditCard} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  public faPhp = faPhp;
  public faAngular = faAngular;
  public faClock = faClock;
  public faCalendar = faCalendar;
  public faMoneyBillAlt = faMoneyBillAlt;
  public faCreditCard = faCreditCard;
}
