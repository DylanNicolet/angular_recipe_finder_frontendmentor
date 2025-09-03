import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealLifeSection } from './real-life-section';

describe('RealLifeSection', () => {
  let component: RealLifeSection;
  let fixture: ComponentFixture<RealLifeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealLifeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealLifeSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
