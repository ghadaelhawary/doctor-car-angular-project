import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  generalFormError: boolean = false;
  submitted: boolean = false;
  successMessage:string = "Message Sent Successfully";

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      Name: ["", Validators.required],
      Email: ["", [Validators.required, Validators.email]],
      Subject: ["", Validators.required],
      Message: ["", Validators.required]
    });
  }

  sendEmail(){
    if(this.contactForm.valid){
      this.generalFormError = false;
      this.submitted = true;

      // location.href='mailto:omar.hegazy65@gmail.com';
      console.log(this.contactForm.value);

    } else {
      this.generalFormError = true;
    }
  }

}
