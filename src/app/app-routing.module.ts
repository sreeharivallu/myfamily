import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyComponent } from './family/family.component';

const routes: Routes = [
  { path: 'mypage/:name', component: FamilyComponent },
  { path: '**', redirectTo: 'mypage/Myself'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
