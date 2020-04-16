import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrabajadorComponent } from './AddTrabajador.component';

describe('AddTrabajadorComponent', () => {
  let component: AddTrabajadorComponent;
  let fixture: ComponentFixture<AddTrabajadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrabajadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
