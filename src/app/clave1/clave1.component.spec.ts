import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clave1Component } from './clave1.component';

describe('Clave1Component', () => {
  let component: Clave1Component;
  let fixture: ComponentFixture<Clave1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clave1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clave1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
