import { Component } from '@angular/core';
import postres from "../assets/desserts.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appJSONangular';

  postres : any[] = postres.data;

  constructor(){
    console.log(postres.data);
  }

}
