import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';

//Services
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnInit {

  @Input() public familyMember: string;
  @Input() public about: string;
      
  home:any;
  constructor(private _family:FamilyService) {
  }

  ngOnChanges(inputChange: SimpleChanges) {    
    let name: SimpleChange = inputChange.name;
    let about: SimpleChange = inputChange.about;
        
    this._family.getFamilyData().subscribe(familyData => {       
      this.home = familyData[this.familyMember][this.about];      
    })
  }

  ngOnInit() {
    
  }

}

