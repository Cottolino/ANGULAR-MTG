import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardviewdeckComponent } from './cardviewdeck.component';

describe('CardviewdeckComponent', () => {
  let component: CardviewdeckComponent;
  let fixture: ComponentFixture<CardviewdeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardviewdeckComponent]
    });
    fixture = TestBed.createComponent(CardviewdeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
