import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionIconAtom } from './action-icon.atom';

describe('ActionIconAtom', () => {
  let component: ActionIconAtom;
  let fixture: ComponentFixture<ActionIconAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionIconAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionIconAtom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
