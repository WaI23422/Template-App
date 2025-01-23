import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('signinForm', { read: ViewContainerRef, static: true }) signinFormRef?: ViewContainerRef;
  @ViewChild('signupForm', { read: ViewContainerRef, static: true }) signupFormRef?: ViewContainerRef;
  
  isVisible = true;

  constructor(private cfr: ComponentFactoryResolver) { }
  ngOnInit(): void {
    localStorage.setItem("admin", JSON.stringify([{
      username: "admin",
      password: "123"
    }]))

    this.handleSwitch();
  }

  ngAfterViewInit(): void {
  }

  async handleSwitch() {
    this.isVisible = !this.isVisible;
    
    if (this.isVisible) {
      const { SignUpFormComponent } = await import('src/app/components/library/sign-up-form/sign-up-form.component');
      const componentFactory = this.cfr.resolveComponentFactory(SignUpFormComponent);
      const componentRef = this.signupFormRef?.createComponent(componentFactory);
      this.signinFormRef?.clear();
    } else {
      const { SignInFormComponent } = await import('src/app/components/library/sign-in-form/sign-in-form.component');
      const componentFactory = this.cfr.resolveComponentFactory(SignInFormComponent);
      const componentRef = this.signinFormRef?.createComponent(componentFactory);
      // componentRef?.instance.changeFormValue('new') 
      this.signupFormRef?.clear();
    }

  }
}
