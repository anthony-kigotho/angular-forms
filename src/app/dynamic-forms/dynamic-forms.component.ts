// Import necessary modules from Angular Forms
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-forms.component.html',
  styleUrl: './dynamic-forms.component.css'
})

export class ProfileEditorComponent {
  // Initialize FormGroup with FormArray
  profileForm: FormGroup;

  // Constructor to initialize FormBuilder
  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      favoriteBooks: this.formBuilder.array([this.formBuilder.control('')])
    });
  }

  // Getter method to access FormArray
  get favoriteBooks() {
    return this.profileForm.get('favoriteBooks') as FormArray;
  }

  // Method to add a new book control dynamically
  addBook() {
    this.favoriteBooks.push(this.formBuilder.control(''));
  }

  // Method to submit form data
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
