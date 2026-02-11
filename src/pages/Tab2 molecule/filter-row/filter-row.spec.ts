import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRowMolecule } from './filter-row';

describe('FilterRow', () => {
  let component: FilterRowMolecule;
  let fixture: ComponentFixture<FilterRowMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterRowMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRowMolecule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
