import { Component } from '@angular/core';
import { Observable } from 'rxjs';

//Services
import { FamilyService } from '../services/family.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'myfamily';
  myFamily:any;
  
  constructor(private _family:FamilyService){    
  }

  ngOnInit(){
    this._family.getFamilyData().subscribe(familyData => {       
      this.myFamily = familyData;
    })
  }
  
}

