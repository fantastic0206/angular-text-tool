import { LoggedInGuard } from './../infrastructure/sessions/loggedInGuard';
import { UserRepository } from './../infrastructure/repositories/user.repository';
import { FileRepository } from './../infrastructure/repositories/file.repository';
import { BreadCrumbSession } from './../infrastructure/sessions/breadcrumb.session';
import { AppRepository } from './../infrastructure/repositories/app.repository';
import { UserSession } from './../infrastructure/sessions/user.session';
import { FileSession } from './../infrastructure/sessions/file.session';
import { AppSession } from './../infrastructure/sessions/app.session';
import { AppContext } from './../infrastructure/app.context';
import { GapiSession } from './../infrastructure/sessions/gapi.session';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { QuillModule } from 'ngx-quill'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeyboardShortcutsModule }     from 'ng-keyboard-shortcuts';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { MonacoEditorModule , NgxMonacoEditorConfig} from 'ngx-monaco-editor';





import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { HttpModule } from '@angular/http';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { PrivatePolicyComponent } from './pages/private-policy/private-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ProperComponent } from './pages/proper/proper.component';
import {TestComponent } from './pages/test/test.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BooksModalComponent } from './pages/books-modal/books-modal.component';
import { CustomPaginator } from './pages/books-modal/CustomPaginatorConfiguration';
import { DialogComponent } from './dialog/dialog.component';
import {DialogService} from './services/dialog.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {EpubService} from "./shared/services/epub.service";



export function initGapi(gapiSession: GapiSession) {
  return () => gapiSession.initClient();
}

const monacoConfig: NgxMonacoEditorConfig = {
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
};


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrivatePolicyComponent,
    TermsComponent,
    ProperComponent,
    TestComponent,
    BooksModalComponent,
    DialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    KeyboardShortcutsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    AngularEditorModule,
    HttpClientModule,
    HttpModule,
    MonacoEditorModule.forRoot(monacoConfig),

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatIconModule,
    MatFormFieldModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
    entryComponents: [
    DialogComponent,
    BooksModalComponent
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initGapi, deps: [GapiSession], multi: true },
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
    AppContext,

    AppSession,
    FileSession,
    GapiSession,
    UserSession,

    AppRepository,
    BreadCrumbSession,
    FileRepository,
    UserRepository,

    LoggedInGuard,
    DialogService,
    EpubService

  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
