import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacturaComponent } from './EditFactura.component';

describe('EditFacturaComponent', () => {
  let component: EditFacturaComponent;
  let fixture: ComponentFixture<EditFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
