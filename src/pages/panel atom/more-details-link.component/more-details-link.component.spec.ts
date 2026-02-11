import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailsLinkComponent } from './more-details-link.component';

describe('MoreDetailsLinkComponent', () => {
  let component: MoreDetailsLinkComponent;
  let fixture: ComponentFixture<MoreDetailsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreDetailsLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreDetailsLinkComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
