import { Component } from '@angular/core';
import { estimateCard } from '../../../interface/EstimateCard.js';
import { EstimateService } from '../../../service/estimate.service.js';
import { EstimatecardComponent } from '../../../client/tools/estimatecard/estimatecard.component.js';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../service/login.service.js';

@Component({
  selector: 'app-estimate',
  standalone: true,
  imports: [EstimatecardComponent, RouterModule],
  templateUrl: './estimate.component.html',
  styleUrl: './estimate.component.css',
})
export class EstimateComponent {
  estimateData: estimateCard[] = [];

  constructor(private EstimateService: EstimateService, private authService : AuthService ) {}

  ngOnInit() {
    this.getEstimateCard();
    console.log(this.estimateData);
    console.log(this.authService.getAuth());
    console.log(this.authService.isAuth().subscribe(
      (e) => console.log(e)
    ));
  }
  getEstimateCard() {
    this.EstimateService.getEstimateCard().subscribe((e) => {
      this.estimateData = e;
    });
  }
}
