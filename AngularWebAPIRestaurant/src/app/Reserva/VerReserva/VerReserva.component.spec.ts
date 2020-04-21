import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservaComponent } from './VerReserva.component';

describe('VerReservaComponent', () => {
  let component: VerReservaComponent;
  let fixture: ComponentFixture<VerReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
