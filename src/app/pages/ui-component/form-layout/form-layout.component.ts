import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formBasicObject } from 'src/app/app-interface-object';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.css']
})
export class FormLayoutComponent implements OnInit {
  
  templateDrivenVertical: formBasicObject = new formBasicObject();
  templateDrivenHorizontal: formBasicObject = new formBasicObject();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log('Form Submitted:', form.value);
  }
}
