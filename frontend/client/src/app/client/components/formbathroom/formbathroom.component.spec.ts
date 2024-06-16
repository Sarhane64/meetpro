import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbathroomComponent } from './formbathroom.component';

describe('FormbathroomComponent', () => {
  let component: FormbathroomComponent;
  let fixture: ComponentFixture<FormbathroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormbathroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormbathroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
