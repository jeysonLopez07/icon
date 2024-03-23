import { Component,Input } from '@angular/core';
import { TarjetaServicioComponent } from '../tarjeta-servicio/tarjeta-servicio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjetas-servicios',
  standalone: true,
  imports: [CommonModule,TarjetaServicioComponent],
  templateUrl: './tarjetas-servicios.component.html'
})
export class TarjetasServiciosComponent {

  tabs = ['Construcción, Mantenimiento y Acabados', 'Instalación de Carpetas Asfálticas', 'Servicios Eléctricos', 'Trabajos Exteriores'];
  actionTab=["Contenedor1","Contenedor2","Contenedor3","Contenedor4"]
  selectedTab = 'Contenedor1'
selectedTabIndex = 0;

}
