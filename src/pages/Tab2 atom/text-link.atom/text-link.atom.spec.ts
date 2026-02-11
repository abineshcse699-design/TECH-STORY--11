import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLinkAtom } from './text-link.atom';

describe('TextLinkAtom', () => {
  let component: TextLinkAtom;
  let fixture: ComponentFixture<TextLinkAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextLinkAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextLinkAtom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
