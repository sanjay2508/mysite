import { Component, OnInit } from '@angular/core';
import { EmpService} from '../Emp.Service';
import { Observable, Subscription  } from 'rxjs';

@Component({
  selector: 'app-cricket-news',
  templateUrl: './cricket-news.component.html',
  styleUrls: ['./cricket-news.component.css']
})
export class CricketNewsComponent implements OnInit {

  constructor(private _EmpService: EmpService) { }  

  ;
  CricInfo;     

  ngOnInit() {     
      this._EmpService.getNews().subscribe((data)=>
      {  
           this.CricInfo=data;           
           this.CricInfo = this.CricInfo["articles"];//["0"]["title"];           
      });  
     // this.gettime(this.CricInfo);         
    }
   
   /*  gettime(data){
    this.interval = setInterval(() => {
      this.loadnews(data);
    }, 5000);
  }
    loadnews(data){      
      alert(data["0"]["title"]);
      this.title = data[this.i]["title"];
      this.description = data[this.i].description;
      this.content = data[this.i].content;
      this.i++;
    } */

}
