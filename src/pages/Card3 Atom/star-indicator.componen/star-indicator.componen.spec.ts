import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarIndicatorComponen } from './star-indicator.componen';

describe('StarIndicatorComponen', () => {
  let component: StarIndicatorComponen;
  let fixture: ComponentFixture<StarIndicatorComponen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarIndicatorComponen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarIndicatorComponen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
