import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  get invalidEmailControl(): boolean {
    return this.form.get("email")!.touched && this.form.get("email")!.invalid
  }

  get invalidPasswordControl(): boolean {
    return this.form.get("password")!.touched && this.form.get("password")!.invalid
  }

  sendData(): void {
    console.log(this.form.value)
    if (this.form.valid) {
      console.log("valid form, go to the main")
    } else {
      console.log("invalid form")
    }
  }

}
