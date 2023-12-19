import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMTGComponent } from './list-mtg.component';

describe('ListMTGComponent', () => {
  let component: ListMTGComponent;
  let fixture: ComponentFixture<ListMTGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMTGComponent]
    });
    fixture = TestBed.createComponent(ListMTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
