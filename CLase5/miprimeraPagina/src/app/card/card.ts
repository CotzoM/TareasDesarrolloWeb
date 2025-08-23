import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule]
})
export class Card {
  cards = [
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'The Shiba Inu is the smallest of the six original...'
    },
    {
      title: 'Golden Retriever',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'Friendly, intelligent, and devoted companion...'
    },
    {
      title: 'Husky',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'Known for their thick fur and striking blue eyes...'
    },
    {
      title: 'Bulldog',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'Gentle and affectionate, perfect family pet...'
    },
    {
      title: 'Beagle',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'Curious and merry, great with children...'
    },
    {
      title: 'German Shepherd',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'Courageous, confident, and smart working dog...'
    }
  ];
}
