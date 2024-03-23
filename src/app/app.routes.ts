import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { TarjetasServiciosComponent } from './tarjetas-servicios/tarjetas-servicios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';


export const routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'quienes-somos', component: QuienesSomosComponent },
{ path: 'servicios', component: TarjetasServiciosComponent },
{ path: 'proyectos', component: ProyectosComponent},
{ path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
{ path: 'contactanos', component: ContactanosComponent },
{ path: '**', redirectTo: 'inicio' },];
