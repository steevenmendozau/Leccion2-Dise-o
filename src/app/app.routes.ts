import { Routes } from '@angular/router';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { PostresComponent } from './pages/postres/postres.component';

export const routes: Routes = [
    { path: '', component: UbicacionesComponent },
  { path: 'postres', component: PostresComponent }
];
