import { Component,OnInit } from '@angular/core';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
    
})
export class AppComponent{
  title = 'Profile'; 
  name = 'Sanjay'; 
  NavItems = ['about', 'experience', 'education', 'skills','intrest','awards','live-score','cricket-news'];  
}
