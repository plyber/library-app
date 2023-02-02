import { Component } from '@angular/core';
import { BookModel } from './Models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-app';
  books: BookModel[] = [
    {
      id: 0,
      title: 'Cooking Book',
      info: 'A book about cooking.',
      availability: false
    },
    {
      id: 1,
      title: 'Travel Book',
      info: 'A book about where to travel.',
      availability: true
    }
  ]
}
