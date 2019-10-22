import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Graphe1Component} from './pages/graphe1/graphe1.component';
import {Graphe2Component} from './pages/graphe2/graphe2.component';

const routes: Routes = [
  {path: '',   redirectTo: '/graphe1', pathMatch: 'full'},
  {path: 'graphe1', component: Graphe1Component},
  {path: 'graphe2', component: Graphe2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
