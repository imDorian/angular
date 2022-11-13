import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  userRegisterForm!: FormGroup
  isSubmit:boolean= false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userRegisterForm =this.formBuilder.group({
      name:["", [Validators.minLength(5), Validators.required]] ,
      email:["", [Validators.email, Validators.required]],
      description:["", [Validators.minLength(10), Validators.required]]
    })
}
    submit(){
      this.isSubmit=true
      console.log(this.userRegisterForm.value)
      console.log(this.userRegisterForm)
    }







  }
