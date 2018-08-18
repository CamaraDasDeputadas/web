import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcertoBaixoComponent } from './acerto-baixo.component';

describe('AcertoBaixoComponent', () => {
  let component: AcertoBaixoComponent;
  let fixture: ComponentFixture<AcertoBaixoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcertoBaixoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcertoBaixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
