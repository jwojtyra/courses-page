import {Component, OnInit} from '@angular/core';
import {faFacebookSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public faFacebook = faFacebookSquare;
  public faGithub = faGithubSquare;

  constructor() {
  }

  ngOnInit(): void {
  }

}
