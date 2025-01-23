import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHelperService } from 'src/app/services/form-helper.service';
import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public formHelper: FormHelperService,
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/),Validators.minLength(4)]],
    })
    this.formHelper.object = this.signUpForm;
  }
  
  register() {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    
    localStorage.setItem(this.signUpForm.value.username, JSON.stringify([{
        username: this.signUpForm.value.username,
        email:this.signUpForm.value.email,
        password: this.signUpForm.value.password
      }]));
    alert("Đăng ký thành công");
  }
}
