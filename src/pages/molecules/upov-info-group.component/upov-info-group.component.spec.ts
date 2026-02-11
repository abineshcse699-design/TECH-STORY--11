import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpovInfoGroupComponent } from './upov-info-group.component';

describe('UpovInfoGroupComponent', () => {
  let component: UpovInfoGroupComponent;
  let fixture: ComponentFixture<UpovInfoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpovInfoGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpovInfoGroupComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
