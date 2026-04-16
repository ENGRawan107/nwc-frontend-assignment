
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { BillsComponent } from './bills/bills';
import { RequestsComponent } from './requests/requests';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'requests', component: RequestsComponent }
];