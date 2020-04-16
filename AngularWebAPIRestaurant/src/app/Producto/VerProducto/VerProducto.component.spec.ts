import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProductoComponent } from './VerProducto.component';

describe('VerProductoComponent', () => {
  let component: VerProductoComponent;
  let fixture: ComponentFixture<VerProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
