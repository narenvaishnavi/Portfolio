import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/primeng";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactItems:MenuItem[];
  constructor() { }

  ngOnInit() {
    this.contactItems = [
      { label: 'GitHub', url: 'https://github.com/narenvaishnavi'  },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/naren-vaishnavi-41875bb6/'}
    ]
  }

}
