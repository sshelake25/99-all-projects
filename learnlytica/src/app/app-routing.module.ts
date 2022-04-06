import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [

  { path: 'course', component: ListCourseComponent },

  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ListContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
