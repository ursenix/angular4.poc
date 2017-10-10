import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  signupForm: FormGroup;
  ngOnInit() {
  this.signupForm = new FormGroup({
    'firstname' : new FormControl(null, [Validators.required, Validators.minLength(2)]),
    'lastname': new FormControl(null, [Validators.required, Validators.minLength(2),]), 
    'phonenumber' : new FormControl(null, [Validators.required]),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    //'email': new FormControl('', [Validators.required,Validators.pattern("[^ @]*@[^ @]*")])  

  });




  }

  onSubmit() {
    console.log(this.signupForm)
  }

}
