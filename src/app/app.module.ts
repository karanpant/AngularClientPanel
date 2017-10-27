import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { FlashMessagesModule } from 'angular2-flash-messages';
//AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

//Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//Service imports
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {SettingsService} from './services/settings.service';
import {RegisterGuard} from './guards/register.guard';

const appRoutes: Routes = [
  {path:'', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent, canActivate:[RegisterGuard]},
  {path:'login', component:LoginComponent},
  {path:'add-client', component: AddClientComponent, canActivate:[AuthGuard]},
  {path:'client/:id', component:ClientDetailsComponent, canActivate:[AuthGuard]},
  {path: 'edit-client/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path:'settings', component:SettingsComponent, canActivate:[AuthGuard]},
  {path:'**', component:PageNotFoundComponent}
  
];

export const firebaseConfig = {
  apiKey: "AIzaSyA4A4IA6zMn6yzpPE6Cg-xleR9lGA0yDpU",
  authDomain: "clientpanel-b5ae9.firebaseapp.com",
  databaseURL: "https://clientpanel-b5ae9.firebaseio.com",
  storageBucket: "clientpanel-b5ae9.appspot.com",
  messagingSenderId: "989935854835"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule, FlashMessagesModule
  ],
  providers: [
    ClientService,
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
