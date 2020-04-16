import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInfoComponent } from './ListarInfo.component';

describe('ListarInfoComponent', () => {
  let component: ListarInfoComponent;
  let fixture: ComponentFixture<ListarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
