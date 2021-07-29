import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListUsersComponent } from '../admin/list-users/list-users.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from '../admin/updateuser/updateuser.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    UserComponent,
    ListUsersComponent,
    InscriptionComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    LoginformComponent,
    RegisterformComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class UserModule { }
