import { Component, Input } from '@angular/core';
import { estimateCard } from '../../../interface/EstimateCard.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estimatecard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estimatecard.component.html',
  styleUrl: './estimatecard.component.css',
})
export class EstimatecardComponent {
  @Input() cardData: estimateCard[] = [];
}
