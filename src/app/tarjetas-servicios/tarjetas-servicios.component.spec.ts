import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasServiciosComponent } from './tarjetas-servicios.component';

describe('TarjetasServiciosComponent', () => {
  let component: TarjetasServiciosComponent;
  let fixture: ComponentFixture<TarjetasServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetasServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
