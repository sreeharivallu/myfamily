import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';

//Services
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements OnInit {

  @Input() public familyMember: string;  
  personData:any = {};
  about:string;

  constructor(private _family:FamilyService) { 
      this.about = "home";
  }

  ngOnChanges(inputChange: SimpleChanges) {    
    //let name: SimpleChange = inputChange.name;    
    this._family.getFamilyData().subscribe(familyData => {       
      this.personData = familyData[this.familyMember];       
    })    
    this.showTab('home');
  }
  
  ngOnInit() {
  }
 
 showTab(tab){   
    this.about = tab;    
  }
}

