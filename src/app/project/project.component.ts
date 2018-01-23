import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/primeng";
import { Menu } from "primeng/components/menu/menu";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  contactItems: MenuItem[];
  h1: string = 'Agilefant- Wells Fargo';
  h2: string = 'Acess Plus EMEA - First Data Corporation';
  h3: string = 'Control 360 - First Data Corporation ';
  h4: string = 'Acess Plus Collections - First Data Corporation';

  desc1: string = 'Agilefant is an open source web backlog management tool that optimizes business functionalities by\
  going beyond the minimum requirements.I was involved in report generation for resource capacity and financial\
  variance of the Project along with Front end development.';

  desc2: string = 'Here my role was of "front end developer" creating Global Transaction Tracking system\
                            Application to get overall view of all the transactions performed on a card by card holder.Handled\
                            Front-end using Angular JS.Consumed RESTful services through Angular factory service\
                            calls from the front-end.';
  desc3: string = 'It is a Multi organization which deals with those financial accounts which are deferred \
  to pay money back to the financial institutions. My role was of "front end developer" \
  dedicated in designing user Interfaces for Customer Care Services to collect disputes from vendor\
   using AngularJS framework.';

  constructor() { }

  ngOnInit() {
    this.contactItems = [
      { label: 'GitHub', url: 'https://github.com/narenvaishnavi' }
    ]
  }

}
