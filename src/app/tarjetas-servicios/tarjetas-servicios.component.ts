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

  servicios = [{nombreServicio:'Construcción de viviendas',icon:'house'},{nombreServicio:'Mantenimiento de casas y edificios',icon:'house'} ,{nombreServicio:'Instalación de carpeta asfáltica en terrazas',icon:'house'},{nombreServicio:'Aplicaciones de aislamiento térmico en pintura, techos y terrazas',icon:'house'},{nombreServicio:'Trabajos de fontanería',icon:'house'},{nombreServicio:'Pintura de casas',icon:'house'},{nombreServicio:'Electricidad residencial',icon:'house'},{nombreServicio:'Soldadura, balconearía, instalación de cielo acústico y de PVC',icon:'house'},{nombreServicio:'Reparación de portones corredizos',icon:'house'},{nombreServicio:'Trabajos de jardinería',icon:'house'},{nombreServicio:'Trabajos con tabla',icon:'house'}];
}
