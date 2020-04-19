import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VdcPreviewComponent } from './videochat/vdc-preview/vdc-preview.component';


const routes: Routes = [
  {
    path:'vdcpreview',
    component: VdcPreviewComponent
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
