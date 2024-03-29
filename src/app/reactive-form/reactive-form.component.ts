import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `,
})
export class ReactiveFavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}
