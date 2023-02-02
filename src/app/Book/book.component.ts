import { Component, Input } from "@angular/core";
import { BookModel } from "../Models/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls:['book.component.scss']
})

export class BookComponent{
  @Input() book: BookModel={
    id: 0,
    title: '',
    info: '',
    availability: false
  };

  constructor(){

  }

  ngOnInit(){
    //console.log(this.books[0])
  }

}
