import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMethodComponent } from './type-method.component';

describe('TypeMethodComponent', () => {
  let component: TypeMethodComponent;
  let fixture: ComponentFixture<TypeMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeMethodComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
