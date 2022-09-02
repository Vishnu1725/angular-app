import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';

  constructor(private service : AppServiceService){

  }

  ngOnInit(){
this.getdataFromAPI();
  }
 getdataFromAPI(){
   this.service.getData().subscribe((response) => {
    console.log('API connected',response)

   },(error)=>{
    console.log("not connected",error)
   })
}
}
