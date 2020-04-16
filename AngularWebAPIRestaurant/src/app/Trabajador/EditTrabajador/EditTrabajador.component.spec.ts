import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrabajadorComponent } from './EditTrabajador.component';

describe('EditTrabajadorComponent', () => {
  let component: EditTrabajadorComponent;
  let fixture: ComponentFixture<EditTrabajadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrabajadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
