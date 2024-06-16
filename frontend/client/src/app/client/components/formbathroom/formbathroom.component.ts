import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbathroom',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formbathroom.component.html',
  styleUrl: './formbathroom.component.css',
})
export class FormbathroomComponent {
  fb = inject(FormBuilder);
  @Input() valueOfScale: number = 0;

  bathroomForm = this.fb.group({
    length: ['', [Validators.required]],
    width: ['', [Validators.required]],
    surface: ['', [Validators.required]],
    furniture: this.fb.group({
      yes: this.fb.group({
        WC: [''],
        bath: [''],
        italianShower: [''],
        shower: [''],
      }),
      no: ['', [Validators.required]],
    }),
    coverings: this.fb.group({
      yes: this.fb.group({
        tiles: [''],
        marble: [''],
        lino: [''],
        parquet: [''],
      }),
      no: ['', [Validators.required]],
    }),
    lightpoint: ['', [Validators.required]],
    finishing: ['', [Validators.required]],
  });

  onSubmit() {
    console.log(this.bathroomForm.value);
  }
  onClick() {
    this.valueOfScale += 1;
    console.log(this.valueOfScale);
  }
}
