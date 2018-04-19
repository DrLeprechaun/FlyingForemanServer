import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesCooperationComponent } from './communities-cooperation.component';

describe('CommunitiesCooperationComponent', () => {
  let component: CommunitiesCooperationComponent;
  let fixture: ComponentFixture<CommunitiesCooperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesCooperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesCooperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
