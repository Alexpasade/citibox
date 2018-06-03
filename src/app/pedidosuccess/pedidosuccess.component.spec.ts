import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosuccessComponent } from './pedidosuccess.component';

describe('PedidosuccessComponent', () => {
  let component: PedidosuccessComponent;
  let fixture: ComponentFixture<PedidosuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
