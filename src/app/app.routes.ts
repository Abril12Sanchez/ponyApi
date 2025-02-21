import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListOfPonisComponent } from './pages/list-of-ponis/list-of-ponis.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'formulario', component: FormularioComponent},
    {path:'listOfPonis', component: ListOfPonisComponent },
    {path:'**', redirectTo:'home'}

];
