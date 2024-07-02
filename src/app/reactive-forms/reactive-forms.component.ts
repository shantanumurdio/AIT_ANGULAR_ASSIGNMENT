import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  data: any;
  contactForm!: FormGroup; // Ensure to use ! to indicate it will be initialized

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl()
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.data = this.contactForm.value;
    } else {
      this.contactForm.markAllAsTouched(); // Ensure all fields show validation errors
    }
  }

  reset(): void {
    this.contactForm.reset();
    this.data = undefined;
  }
}
