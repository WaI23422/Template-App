import {
  Component,
  ElementRef,
  EventEmitter,
  // HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { navData } from './navigation-data';
import { MenuItem } from 'primeng/api';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css'],
  animations: [
    trigger('swipeLeftRight', [
      state(
        'void',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      state(
        '*',
        style({
          transform: 'translateX(0%)',
        })
      ),
      transition('* <=> void', [animate('0.4s ease-in-out')]),
    ]),
  ],
})
export class SidebarNavComponent implements OnInit {
  @ViewChild('scrollContainer') sidebarScroll!: ElementRef<any>;

  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>(this.isVisible);
  isMobileScreen!: boolean;
  menuItems: MenuItem[] = navData;

  constructor(private screenService: ScreenService) {}

  ngOnInit(): void {
    this.checkScreenSize();

    this.screenService.onScreenWidthChange().subscribe(() => {
      this.checkScreenSize();
    });
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.checkScreenSize();
  // }

  checkScreenSize(): void {
    this.isMobileScreen = this.screenService.isSmallerThanNotebook();
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
    this.isVisibleChange.emit(this.isVisible);
  }

  showScrollbar(): void {
    if (this.isMobileScreen) { return;}

    const element = this.sidebarScroll.nativeElement;
    if (element.scrollHeight > element.clientHeight) {
      element.classList.add('thin-scroll');
    }
  }

  hideScrollbar(): void {
    if (this.isMobileScreen) {return;}

    this.sidebarScroll.nativeElement.classList.remove('thin-scroll');
  }
}
