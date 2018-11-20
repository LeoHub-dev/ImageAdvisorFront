import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'test',
    component: TagsComponent
  },
  {
    path: 'test2',
    component: CategoriesComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'not-found',
    component: UsersComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
