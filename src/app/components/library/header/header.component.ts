import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() logoImageUrl: string = 'assets/upload/img/logo-holder.png';
  @Input() logoTitle: string = 'sakai';
  @Output() toggleVisibility = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  changeSideBarVisibility() {
    this.toggleVisibility.emit();
  }
}
