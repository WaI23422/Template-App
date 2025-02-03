import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.css'],
})
export class HeaderLandingComponent implements OnInit {
  @Input() logoImageUrl: string = 'assets/upload/img/logo-holder.png';
  @Input() logoTitle: string = 'sakai';
  isMobileScreen: boolean = false;

  constructor(private screenService: ScreenService) {}

  ngOnInit(): void {
    this.checkScreenSize();

    this.screenService.onScreenWidthChange().subscribe(() => {
      this.checkScreenSize();
    });
  }

  checkScreenSize(): void {
    this.isMobileScreen = this.screenService.isSmallerThanNotebook();
  }
}
