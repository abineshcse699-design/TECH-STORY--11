import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components2 } from './components2';

describe('Components2', () => {
  let component: Components2;
  let fixture: ComponentFixture<Components2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Components2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Components2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
