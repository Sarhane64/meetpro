import { Component } from '@angular/core';
import { estimateCard } from '../../../interface/EstimateCard.js';
import { EstimateService } from '../../../service/estimate.service.js';
import { FormbathroomComponent } from '../../components/formbathroom/formbathroom.component.js';
import { AuthService } from '../../../service/login.service.js';
import { tap } from 'rxjs';

@Component({
  selector: 'app-bathroom',
  standalone: true,
  imports: [FormbathroomComponent],
  templateUrl: './bathroom.component.html',
  styleUrl: './bathroom.component.css',
})
export class BathroomComponent {
  bathroomData: estimateCard[] = [];
  valueOfScale: number = 0;

  ngOnInit() {
    this.getEstimateData();
    console.log(this.authservice.isAuth().subscribe(
    (e) => console.log(e)
    ));
  }

  constructor(private EstimateService: EstimateService, private authservice : AuthService) {}

  getEstimateData() {
    this.EstimateService.getEstimateCard().subscribe((e) => {
      this.bathroomData = e;
      console.log(e);
      console.log(this.bathroomData);
    });
  }
  onClick() {
    this.valueOfScale += 1;
    console.log(this.valueOfScale);
  }
  onClickMoins() {
    this.valueOfScale -= 1;
    console.log(this.valueOfScale);
  }
}
