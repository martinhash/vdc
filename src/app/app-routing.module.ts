import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VdcPreviewComponent } from './videochat/vdc-preview/vdc-preview.component';


const routes: Routes = [
  {
    path:'vdcpreview',
    component:VdcPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
