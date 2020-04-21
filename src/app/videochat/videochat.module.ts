import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VdcPreviewComponent } from './vdc-preview/vdc-preview.component';
import { VdcPanelChatComponent } from './vdc-panel-chat/vdc-panel-chat.component';
import { VdcScreenVideoComponent } from './vdc-screen-video/vdc-screen-video.component';
import { VdcInputChatComponent } from './vdc-input-chat/vdc-input-chat.component';
import { VdcHomeRoomComponent } from './vdc-home-room/vdc-home-room.component';
import { VdcVideoOptionsComponent } from './vdc-video-options/vdc-video-options.component';
import { PatientPinComponent } from './patient-pin/patient-pin.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientWaitComponent } from './patient-wait/patient-wait.component';
import { InputpinComponent } from './inputpin/inputpin.component';



@NgModule({
  declarations: [VdcPreviewComponent, VdcPanelChatComponent, VdcScreenVideoComponent, VdcInputChatComponent, VdcHomeRoomComponent, VdcVideoOptionsComponent, PatientPinComponent, PatientFormComponent, PatientWaitComponent, InputpinComponent],
  imports: [
    CommonModule
  ]
})
export class VideochatModule { }
