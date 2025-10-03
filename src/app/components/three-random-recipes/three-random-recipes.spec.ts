import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeRandomRecipes } from './three-random-recipes';

describe('ThreeRandomRecipes', () => {
  let component: ThreeRandomRecipes;
  let fixture: ComponentFixture<ThreeRandomRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeRandomRecipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeRandomRecipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
