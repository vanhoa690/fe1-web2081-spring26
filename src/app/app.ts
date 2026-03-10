import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app'; // ko dung const hay let
  fullName = 'hoadv21';
  age: number = 10;

  // method: function
  sayHello() {
    console.log('hello ');
    alert('hello ' + this.fullName);
  }
}
