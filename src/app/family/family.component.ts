import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  routeName: String;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      // subscribe to router event    
      this.activatedRoute.params.subscribe(params => {      
        this.routeName = params.name;
      })   

  }

}
