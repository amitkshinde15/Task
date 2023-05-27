import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-introductory',
  templateUrl: './introductory.component.html',
  styleUrls: ['./introductory.component.css']
})
export class IntroductoryComponent implements OnInit {
  myReactiveForm : FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'firstName': new FormControl('',Validators.required),
      'lastName': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',Validators.required)

    })
  }
  onSubmit(){
    console.log(this.myReactiveForm);
    if (this.myReactiveForm.invalid) {
      this.myReactiveForm.markAllAsTouched();
    }
  }
  
}
