import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsComponent } from './standards.component';

describe('StandardsComponent', () => {
  let component: StandardsComponent;
  let fixture: ComponentFixture<StandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
