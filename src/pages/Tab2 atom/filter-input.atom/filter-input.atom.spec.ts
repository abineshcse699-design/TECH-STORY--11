import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputAtom } from './filter-input.atom';

describe('FilterInputAtom', () => {
  let component: FilterInputAtom;
  let fixture: ComponentFixture<FilterInputAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterInputAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterInputAtom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
