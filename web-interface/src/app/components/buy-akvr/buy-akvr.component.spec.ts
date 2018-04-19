import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAkvrComponent } from './buy-akvr.component';

describe('BuyAkvrComponent', () => {
  let component: BuyAkvrComponent;
  let fixture: ComponentFixture<BuyAkvrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyAkvrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAkvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
