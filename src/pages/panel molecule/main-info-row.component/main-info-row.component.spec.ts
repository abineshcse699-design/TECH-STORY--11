import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoRowComponent } from './main-info-row.component';

describe('MainInfoRowComponent', () => {
  let component: MainInfoRowComponent;
  let fixture: ComponentFixture<MainInfoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInfoRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInfoRowComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
