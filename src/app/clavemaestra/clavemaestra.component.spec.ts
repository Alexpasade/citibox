import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClavemaestraComponent } from './clavemaestra.component';

describe('ClavemaestraComponent', () => {
  let component: ClavemaestraComponent;
  let fixture: ComponentFixture<ClavemaestraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClavemaestraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClavemaestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
