import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  // ko dung const stories
  stories = [
    {
      title: 'One Piece',
      author: 'Oda',
      views: 100000,
    },
    {
      title: 'Naruto',
      author: 'Kishimoto',
      views: 90000,
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 70000,
    },
  ];
  handleClick(title: string) {
    alert(`Hello from Stories component! You clicked on "${title}"`);
  }
}
