import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clave2Component } from './clave2.component';

describe('Clave2Component', () => {
  let component: Clave2Component;
  let fixture: ComponentFixture<Clave2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clave2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clave2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
