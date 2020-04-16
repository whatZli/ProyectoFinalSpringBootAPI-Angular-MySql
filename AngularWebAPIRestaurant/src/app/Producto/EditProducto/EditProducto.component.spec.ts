import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductoComponent } from './EditProducto.component';

describe('EditProductoComponent', () => {
  let component: EditProductoComponent;
  let fixture: ComponentFixture<EditProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
