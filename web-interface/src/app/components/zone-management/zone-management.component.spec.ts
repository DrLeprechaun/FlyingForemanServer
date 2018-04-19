import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneManagementComponent } from './zone-management.component';

describe('ZoneManagementComponent', () => {
  let component: ZoneManagementComponent;
  let fixture: ComponentFixture<ZoneManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
