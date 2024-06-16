import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormplumbingComponent } from './formplumbing.component';

describe('FormplumbingComponent', () => {
  let component: FormplumbingComponent;
  let fixture: ComponentFixture<FormplumbingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormplumbingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormplumbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
