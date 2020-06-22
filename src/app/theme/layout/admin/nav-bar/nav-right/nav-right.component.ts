import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationModel } from 'src/app/site/authentication/authentication.model';
import { AuthenticationService } from './../../../../../site/authentication/authentication.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {

  authModel: AuthenticationModel;

  constructor(
    public authService: AuthenticationService
  ) {
    this.authModel = authService.getLogin();
  }

  ngOnInit() { }
}
