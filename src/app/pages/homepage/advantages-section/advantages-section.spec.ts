import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesSection } from './advantages-section';

describe('AdvantagesSection', () => {
  let component: AdvantagesSection;
  let fixture: ComponentFixture<AdvantagesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvantagesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantagesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
