import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  title: string = 'Sakai-PT';
  logoUrl: string = 'assets/upload/img/sakai-icon.svg';
  
  constructor() {}

  ngOnInit(): void {}
}
