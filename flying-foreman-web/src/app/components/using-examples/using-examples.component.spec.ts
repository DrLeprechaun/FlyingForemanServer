import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingExamplesComponent } from './using-examples.component';

describe('UsingExamplesComponent', () => {
  let component: UsingExamplesComponent;
  let fixture: ComponentFixture<UsingExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
