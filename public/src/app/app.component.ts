import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'

export class AppModule{}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newCake: any;
  allCakes:any;
  oneCake: {};

  constructor(private _httpService: HttpService) { }

  ngOnInit(){
    this.newCake={
      name: "",
      image: ""
    }
    this.getAllCakes();
  }

  createNewCake(){
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data=>{
      console.log("Made a new cake", data);
      this.newCake = {name: "", image: ""}
      this.getAllCakes();
    })
  }

  getAllCakes(){
    let observable = this._httpService.showAll();
    observable.subscribe(data =>{
      console.log("Got all the cakes"+data);
      this.allCakes=data;
      for (var cake of this.allCakes){
        cake.my_rating = {rating: 0, comment: ""}
      }
    })
  }

  rateCake(cake){
    let observable = this._httpService.addRating(cake.my_rating, cake._id);
    observable.subscribe(data=>{
      console.log(data);
      this.getCakeDetails(data._id);
      //this.ratedCake = data; 
    })
  }

  getCakeDetails(num: Number){
    console.log("this is the id of the cake"+num);
    let observable = this._httpService.showOneCake({data: num});
    observable.subscribe(data =>{
      console.log("Got our one cake"+data);
      console.log(data);
      this.oneCake = data;
      var sum= 0;
      var count = 0;
      for(var each of this.oneCake.ratings){
        console.log("the rating is "+each.rating);
        sum+=each.rating;
        count++;
      }
      if (count == 0){
        this.oneCake.avgRating=0;
      }else{
      this.oneCake.avgRating=Math.round((sum/count)*10)/10;
      }
    })
  }

}

