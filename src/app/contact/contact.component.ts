import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  mail: any=""
  pass: any=""
  ananth(){
 localStorage.setItem("my email", this.mail),
 localStorage.setItem("mypossword",this.pass)
  }

}
