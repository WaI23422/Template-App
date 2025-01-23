import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('submenuAnimation', [
      state('hidden', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden',
      })),
      state('visible', style({
        height: '*',
        opacity: 1,
      })),
      transition('hidden <=> visible', [
        animate('0.1s 0.1s ease')
      ]),
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  @Input() navigationItem!: any; 
  @Input() subMenuStatus: boolean = false;
  hasSubMenu: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.hasSubMenu = this.isHasSubMenu();
  }

  isHasSubMenu() {
    return this.navigationItem.items && this.navigationItem.items.length > 0;
  }

  triggerMenuItem() {
    this.subMenuStatus = !this.subMenuStatus;
  }
}
