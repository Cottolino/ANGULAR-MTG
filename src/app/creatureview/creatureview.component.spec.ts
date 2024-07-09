import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureviewComponent } from './creatureview.component';

describe('CreatureviewComponent', () => {
  let component: CreatureviewComponent;
  let fixture: ComponentFixture<CreatureviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureviewComponent]
    });
    fixture = TestBed.createComponent(CreatureviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
