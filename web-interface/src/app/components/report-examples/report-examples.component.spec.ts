import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportExamplesComponent } from './report-examples.component';

describe('ReportExamplesComponent', () => {
  let component: ReportExamplesComponent;
  let fixture: ComponentFixture<ReportExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
