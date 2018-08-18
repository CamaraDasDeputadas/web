import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcertoMedioComponent } from './acerto-medio.component';

describe('AcertoMedioComponent', () => {
  let component: AcertoMedioComponent;
  let fixture: ComponentFixture<AcertoMedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcertoMedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcertoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
