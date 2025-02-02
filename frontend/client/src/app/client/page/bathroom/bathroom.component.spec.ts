import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomComponent } from './bathroom.component';

describe('BathroomComponent', () => {
  let component: BathroomComponent;
  let fixture: ComponentFixture<BathroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BathroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
