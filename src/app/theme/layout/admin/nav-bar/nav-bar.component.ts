import { AuthenticationModel } from './../../../../site/authentication/authentication.model';
import { AuthenticationService } from './../../../../site/authentication/authentication.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NextConfig} from '../../../../app-config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public nextConfig: any;
  public menuClass: boolean;
  public collapseStyle: string;
  public windowWidth: number;
  public authModel: AuthenticationModel;

  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavHeaderMobCollapse = new EventEmitter();

  constructor(
    public authService: AuthenticationService
  ) {
    this.nextConfig = NextConfig.config;
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
    this.authModel = authService.getLogin();
  }

  ngOnInit() { }

  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = (this.menuClass) ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.onNavCollapse.emit();
    } else {
      this.onNavHeaderMobCollapse.emit();
    }
  }

}
