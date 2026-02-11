import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicTitleComponent } from './characteristic-title.component';

describe('CharacteristicTitleComponent', () => {
  let component: CharacteristicTitleComponent;
  let fixture: ComponentFixture<CharacteristicTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacteristicTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacteristicTitleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
