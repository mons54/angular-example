import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MeComponent } from './me/me.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'me', component: MeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(appRoutes);
