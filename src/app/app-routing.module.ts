import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
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
    component: UsersComponent
  },
  {
    path: 'not-found',
    component: AppComponent
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
