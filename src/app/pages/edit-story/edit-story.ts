import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
  id: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID', this.id);
  }

  ngOnInit() {
    // get detail story by id
    this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
      next: (data: any) => {
        console.log(data);
      },
    });
  }
}
