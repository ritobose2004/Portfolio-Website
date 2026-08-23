import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  contactForm: FormGroup;
  isSubmitted: boolean = false;
  successMessage: boolean = false;
  submittedName = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;


    if (this.contactForm.valid) {
      const existingData = localStorage.getItem('contactMessages');
      const messages = existingData ? JSON.parse(existingData) : [];

      const newMessage = {
        ...this.contactForm.value,
        timestamp: new Date().toISOString()
      };

      messages.push(newMessage);
      localStorage.setItem('contactMessages', JSON.stringify(messages));
      this.submittedName = this.contactForm.value.fullName;
      this.successMessage = true;
      this.contactForm.reset();
      this.isSubmitted = false;

      setTimeout(() => {
        this.successMessage = false;
      }, 4000);
    }
  }
}