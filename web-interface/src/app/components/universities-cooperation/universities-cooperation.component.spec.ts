import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesCooperationComponent } from './universities-cooperation.component';

describe('UniversitiesCooperationComponent', () => {
  let component: UniversitiesCooperationComponent;
  let fixture: ComponentFixture<UniversitiesCooperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitiesCooperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesCooperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
