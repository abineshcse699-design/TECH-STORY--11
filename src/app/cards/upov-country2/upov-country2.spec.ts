import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryComponent2 } from './upov-country2';

describe('UpovCountry2', () => {
  let component:  CountryComponent2;
  let fixture: ComponentFixture< CountryComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CountryComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent( CountryComponent2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
