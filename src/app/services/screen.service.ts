import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private screenWidth$: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerWidth);

  private readonly screenWidthBreakPoint = {
    mobile: 576,
    tablet: 768,
    notebook: 992,
    desktop: 1200,
  }

  constructor() {
    window.addEventListener('resize', () => {
      this.setScreenWidth();
    })
  }
  
  private setScreenWidth(): void {
    this.screenWidth$.next(window.innerWidth);
  }

  getScreenWidth():number {
    return this.screenWidth$.getValue();
  }

  onScreenWidthChange() {
    return this.screenWidth$.asObservable();
  }

  isMobile(): boolean {
    return this.getScreenWidth() < this.screenWidthBreakPoint.mobile
  }

  isDesktop(): boolean {
    return this.getScreenWidth() < this.screenWidthBreakPoint.desktop
  }
  
  isSmallerThanTablet(): boolean {
    return this.getScreenWidth() < this.screenWidthBreakPoint.tablet
  }

  isSmallerThanNotebook(): boolean {
    return this.getScreenWidth() < this.screenWidthBreakPoint.notebook
  }  

  isSmallerThanDesktop(): boolean {
    return this.getScreenWidth() < this.screenWidthBreakPoint.desktop
  }
}
