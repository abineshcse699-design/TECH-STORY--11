import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueTextComponent } from './value-text.component';

describe('ValueTextComponent', () => {
  let component: ValueTextComponent;
  let fixture: ComponentFixture<ValueTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueTextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
