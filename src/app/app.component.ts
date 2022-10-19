import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nerd';
  
  is_active: boolean = false;
  
  isact(){
    this.is_active = true;
  }
  
}
