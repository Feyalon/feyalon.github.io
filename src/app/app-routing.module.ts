import { ProjectsComponent } from './projects/projects.component';
import { DeskComponent } from './desk/desk.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'home', component: DeskComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'error', component: ErrorComponent},
  {path: 'contact', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', redirectTo: 'error', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
