import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivatePolicyComponent } from './pages/private-policy/private-policy.component';
import { ProperComponent } from './pages/proper/proper.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: 'editor', component: DashboardComponent },
  { path: '', redirectTo: 'editor', pathMatch: 'full' },
  { path: 'private-policy', component: PrivatePolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'proper', component: ProperComponent },
  { path: 'test-node-server', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
