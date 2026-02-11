import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeaderAtom } from './sort-header.atom';

describe('SortHeaderAtom', () => {
  let component: SortHeaderAtom;
  let fixture: ComponentFixture<SortHeaderAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortHeaderAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortHeaderAtom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
