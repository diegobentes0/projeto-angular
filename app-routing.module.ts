import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/HomeComponent";
import { UsersComponent } from "./pages/users/users.component";
import { UserComponent } from "./pages/user/user.component";


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users/list', component: UsersComponent},
  { path: 'user/:details', component: UserComponent }
];
export class AppRoutingModule {}
