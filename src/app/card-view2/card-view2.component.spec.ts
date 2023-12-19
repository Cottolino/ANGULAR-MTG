import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardView2Component } from './card-view2.component';

describe('CardView2Component', () => {
  let component: CardView2Component;
  let fixture: ComponentFixture<CardView2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardView2Component]
    });
    fixture = TestBed.createComponent(CardView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
