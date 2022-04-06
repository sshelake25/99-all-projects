import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { CourseComponent } from './components/course/course.component';
import { ServicesComponent } from './components/services/services.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';


const myRoutes: Routes = [

  { path: 'course', component: ListCourseComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ListContactComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    ListCourseComponent,
    CourseComponent,
    ServicesComponent,
    ListContactComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule

 //   RouterModule.forRoot(myRoutes) //{useHash: true}

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
