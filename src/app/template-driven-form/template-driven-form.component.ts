import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-favorite-color',
  standalone: true,
  imports: [FormsModule],
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `,
})
export class FavoriteColorComponent {
  favoriteColor = '';
}
