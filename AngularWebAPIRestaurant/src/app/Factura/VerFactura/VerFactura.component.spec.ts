import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFacturaComponent } from './VerFactura.component';

describe('VerFacturaComponent', () => {
  let component: VerFacturaComponent;
  let fixture: ComponentFixture<VerFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
