import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  submitForm() {
    this.http.post('http://localhost:3000/login', this.form.value).subscribe({
      next: (data: any) => {
        alert('Login successful');
        localStorage.setItem('token', data.accessToken);
        // token
      },
    });
  }
}
