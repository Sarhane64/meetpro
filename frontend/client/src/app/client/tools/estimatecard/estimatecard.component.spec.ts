import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatecardComponent } from './estimatecard.component';

describe('EstimatecardComponent', () => {
  let component: EstimatecardComponent;
  let fixture: ComponentFixture<EstimatecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimatecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstimatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
