import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  langs = ['ENG', "HIND", 'TELGU', 'KANDA'];

  myform : FormGroup = new FormGroup(
    {
    fname: new FormControl(),
    lname: new FormControl(),
    email_thbs: new FormControl(),
    password: new FormControl(),
    lang: new FormControl()
  }
  );

  constructor() { }

  ngOnInit(): void {
  }

  getValues() {
    console.log(this.myform);
  }

}
