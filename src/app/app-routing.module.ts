import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VdcPreviewComponent } from './videochat/vdc-preview/vdc-preview.component';
import { VdcHomeRoomComponent } from './videochat/vdc-home-room/vdc-home-room.component';


const routes: Routes = [
  {
    path:'vdcpreview',
    component: VdcPreviewComponent
  },
  {
    path:'vdchomeroom',
    component: VdcHomeRoomComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'vdcpreview'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
