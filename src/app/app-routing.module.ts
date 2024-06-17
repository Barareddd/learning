import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { FormComponent } from './page/form/form.component';
import { EditComponent } from './page/edit/edit.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'form', component: FormComponent },
      { path: 'edit', component: EditComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
