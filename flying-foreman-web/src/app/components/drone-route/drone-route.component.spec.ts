import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneRouteComponent } from './drone-route.component';

describe('DroneRouteComponent', () => {
  let component: DroneRouteComponent;
  let fixture: ComponentFixture<DroneRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
