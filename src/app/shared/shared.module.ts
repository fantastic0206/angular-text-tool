import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatMenuModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { KeyboardShortcutsModule }     from 'ng-keyboard-shortcuts';
import {EpubViewerComponent} from "./viewer/epubViewer.component";
import {SocketIoModule} from "ngx-socket-io";
import {environment} from "../../environments/environment";
import {ProgressBarComponent} from "./viewer/progressBar.component";

@NgModule({
  declarations: [
    HeaderComponent,
    ProgressBarComponent,
    EpubViewerComponent
  ],
  exports: [
    HeaderComponent,
    ProgressBarComponent,
    EpubViewerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule, 
    FormsModule,
    KeyboardShortcutsModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SocketIoModule.forRoot({ url: `${environment.socketUrl}`, options: {} })
  ]
})
export class SharedModule { }
