import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LessonComponent } from './lesson/lesson.component';
import { UserRegisterFormComponent } from './components/user-register-form/user-register-form.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
import { AddNewHouseComponent } from './components/add-new-house/add-new-house.component';
import { ShowFullInfoComponent } from './components/show-full-info/show-full-info.component';
import { ConvertPipe } from './pipes/convert.pipe';
import { HoverDirective } from './directives/hover.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    UserRegisterFormComponent,
    UserLoginFormComponent,
    AddNewHouseComponent,
    ShowFullInfoComponent,
    ConvertPipe,
    HoverDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
