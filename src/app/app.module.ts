import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './page/edit/edit.component';
import { FormComponent } from './page/form/form.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    FormComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
