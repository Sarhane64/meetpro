import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherComponent } from './other.component';

describe('OtherComponent', () => {
  let component: OtherComponent;
  let fixture: ComponentFixture<OtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
