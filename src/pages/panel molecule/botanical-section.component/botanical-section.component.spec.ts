import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotanicalSectionComponent } from './botanical-section.component';

describe('BotanicalSectionComponent', () => {
  let component: BotanicalSectionComponent;
  let fixture: ComponentFixture<BotanicalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotanicalSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotanicalSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
