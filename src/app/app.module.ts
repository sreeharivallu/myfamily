import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { MypageComponent } from './mypage/mypage.component';
import { NoteComponent } from './note/note.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';

//Services
import { FamilyService } from '../services/family.service';

@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    MypageComponent,
    NoteComponent,
    ProfileAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FamilyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
