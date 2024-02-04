import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCardViewComponent } from './scard-view.component';

describe('SCardViewComponent', () => {
  let component: SCardViewComponent;
  let fixture: ComponentFixture<SCardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCardViewComponent]
    });
    fixture = TestBed.createComponent(SCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
