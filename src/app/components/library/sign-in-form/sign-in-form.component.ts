import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHelperService } from 'src/app/services/form-helper.service';
import { signInObject } from 'src/app/app-interface-object';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  signInForm!: FormGroup;

  @Input() formValue?: string = '123';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public formHelper: FormHelperService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: [null,[Validators.required]],
      password: [null,[Validators.required]],
    })
    
    this.formHelper.object = this.signInForm;
  }

  changeFormValue(value:string) {
    this.formValue = value;
  }

  logInOnSubmit(): void {
    const userForm = this.signInForm.value;
    const localUsers = localStorage.getItem(userForm.username);

    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    if (localUsers === null) {
      alert("Không tồn tại tên đăng nhập");
      return;
    };

    const users = JSON.parse(localUsers);
    const isExist = users.find(
      (user: signInObject) => user.name == userForm.name && user.password == userForm.password
    );
    if (isExist === undefined) {
      alert("Sai tên đăng nhập hoặc mật khẩu");
      return;
    }

    alert("Đăng nhập thành công!!!");
    this.authService.login();
    this.router.navigateByUrl('');
    return;
  }
}

