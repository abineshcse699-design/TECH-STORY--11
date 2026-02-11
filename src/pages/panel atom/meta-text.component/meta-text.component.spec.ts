import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaTextComponent } from './meta-text.component';

describe('MetaTextComponent', () => {
  let component: MetaTextComponent;
  let fixture: ComponentFixture<MetaTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaTextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
