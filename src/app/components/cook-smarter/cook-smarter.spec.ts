import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookSmarter } from './cook-smarter';

describe('CookSmarter', () => {
  let component: CookSmarter;
  let fixture: ComponentFixture<CookSmarter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookSmarter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookSmarter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
