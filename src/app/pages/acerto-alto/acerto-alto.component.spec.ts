import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcertoAltoComponent } from './acerto-alto.component';

describe('AcertoAltoComponent', () => {
  let component: AcertoAltoComponent;
  let fixture: ComponentFixture<AcertoAltoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcertoAltoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcertoAltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
