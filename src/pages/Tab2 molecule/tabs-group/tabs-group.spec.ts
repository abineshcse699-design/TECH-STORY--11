import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsGroup } from './tabs-group';

describe('TabsGroup', () => {
  let component: TabsGroup;
  let fixture: ComponentFixture<TabsGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
