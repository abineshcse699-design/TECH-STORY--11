import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarActionsMolecule } from './toolbar-actions';

describe('ToolbarActions', () => {
  let component: ToolbarActionsMolecule;
  let fixture: ComponentFixture<ToolbarActionsMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarActionsMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarActionsMolecule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
