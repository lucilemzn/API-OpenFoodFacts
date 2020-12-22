import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergendetComponent } from './allergendet.component';

describe('AllergendetComponent', () => {
  let component: AllergendetComponent;
  let fixture: ComponentFixture<AllergendetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergendetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergendetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
