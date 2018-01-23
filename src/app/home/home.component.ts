import { Component, OnInit,ModuleWithProviders } from '@angular/core';
import { MenuItem } from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";
import { ActivatedRoute, Router,RouterModule} from "@angular/router";

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private router : Router) { }

  ngOnInit() {
    
  }
    
}
