import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  menuItems: MenuItem[];
  
   name: string = 'Naren Vaishnavi';
   title: string = 'Front end Developer/ Fullstack Developer';
   summary: string = "I’m a  Software Engineer enthusiastic about creating meaningful products using  Angular, Node and Javascript.You can check out some of my work below";
   contactItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.contactItems = [
      { label: 'GitHub', url: 'https://github.com/narenvaishnavi'  },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/naren-vaishnavi-41875bb6/'}
    ]

  }

}
