import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {

  skillList =['Angular','JavaScript','TypeScript','NodeJS','JAVA'];
  ngOnInit(){

}
}

