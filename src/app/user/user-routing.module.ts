import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListUsersComponent } from '../admin/list-users/list-users.component';
import { UpdateuserComponent } from '../admin/updateuser/updateuser.component';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'deleteuser', component: DeleteuserComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'listusers', component: ListUsersComponent },
  { path: 'updateuser/:id', component: UpdateuserComponent },
  { path: 'profile', component: ProfileComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
