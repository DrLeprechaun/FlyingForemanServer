import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmiComponent } from './pmi.component';

describe('PmiComponent', () => {
  let component: PmiComponent;
  let fixture: ComponentFixture<PmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
