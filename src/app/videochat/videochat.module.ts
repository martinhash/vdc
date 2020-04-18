import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VdcPreviewComponent } from './vdc-preview/vdc-preview.component';
import { VdcPanelChatComponent } from './vdc-panel-chat/vdc-panel-chat.component';
import { VdcScreenVideoComponent } from './vdc-screen-video/vdc-screen-video.component';
import { VdcInputChatComponent } from './vdc-input-chat/vdc-input-chat.component';
import { VdcHomeRoomComponent } from './vdc-home-room/vdc-home-room.component';
import { VdcVideoOptionsComponent } from './vdc-video-options/vdc-video-options.component';



@NgModule({
  declarations: [VdcPreviewComponent, VdcPanelChatComponent, VdcScreenVideoComponent, VdcInputChatComponent, VdcHomeRoomComponent, VdcVideoOptionsComponent],
  imports: [
    CommonModule
  ]
})
export class VideochatModule { }
