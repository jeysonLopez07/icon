import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-servicio',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-servicio.component.html'
})
export class TarjetaServicioComponent {
  @Input() nombreServicio: string='';
  @Input() icon: string='';

}
