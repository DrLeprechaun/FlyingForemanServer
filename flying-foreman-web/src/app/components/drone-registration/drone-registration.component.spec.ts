import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneRegistrationComponent } from './drone-registration.component';

describe('DroneRegistrationComponent', () => {
  let component: DroneRegistrationComponent;
  let fixture: ComponentFixture<DroneRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
