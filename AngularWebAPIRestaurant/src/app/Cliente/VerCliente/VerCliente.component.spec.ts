import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerClienteComponent } from './VerCliente.component';

describe('VerClienteComponent', () => {
  let component: VerClienteComponent;
  let fixture: ComponentFixture<VerClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
