import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule], // import module form
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup; // ten bien addForm

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: '', // form co input title
    });
  }

  submitForm() {
    console.log('Form', this.addForm.value);
  }
}
