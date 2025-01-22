import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  @ViewChild(SidebarNavComponent) sidebar!: SidebarNavComponent;

  isMobileScreen!: boolean;
  sidebarVisible: boolean = false;
  title: string = 'Sakai-C';
  logoUrl: string = 'assets/upload/img/sakai-icon.svg';

  constructor(private screenService: ScreenService) {
    this.checkScreenSize();

    this.screenService.onScreenWidthChange().subscribe(() => {
      this.checkScreenSize();
    });
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.checkScreenSize();
  // }

  checkScreenSize(): void {
    this.isMobileScreen = this.screenService.isSmallerThanNotebook();
  }

  toggleSideBarVisibility() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
