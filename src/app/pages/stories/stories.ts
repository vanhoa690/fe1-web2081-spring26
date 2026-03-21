import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  // ko dung const stories
  stories = []; // state stories luu data

  constructor(private http: HttpClient) {} // inject

  ngOnInit() {
    this.http.get('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.stories = data;
      },
      error: () => {},
    });
  }
  handleClick(title: string) {
    alert(`Hello from Stories component! You clicked on "${title}"`);
  }
}
