import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductoComponent } from './ListarProducto.component';

describe('ListarProductoComponent', () => {
  let component: ListarProductoComponent;
  let fixture: ComponentFixture<ListarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
