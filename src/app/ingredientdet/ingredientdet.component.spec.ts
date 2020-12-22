import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientdetComponent } from './ingredientdet.component';

describe('IngredientdetComponent', () => {
  let component: IngredientdetComponent;
  let fixture: ComponentFixture<IngredientdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
