import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() logoImageUrl: string = 'assets/upload/img/logo-holder.png';
  @Input() logoTitle: string = 'sakai';
  @Output() toggleVisibility = new EventEmitter<void>();
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

  changeSideBarVisibility() {
    this.toggleVisibility.emit();
  }
}
