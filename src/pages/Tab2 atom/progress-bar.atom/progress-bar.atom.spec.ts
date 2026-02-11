import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarAtom } from './progress-bar.atom';

describe('ProgressBarAtom', () => {
  let component: ProgressBarAtom;
  let fixture: ComponentFixture<ProgressBarAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarAtom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
