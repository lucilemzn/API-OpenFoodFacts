import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranddetComponent } from './branddet.component';

describe('BranddetComponent', () => {
  let component: BranddetComponent;
  let fixture: ComponentFixture<BranddetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranddetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranddetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
