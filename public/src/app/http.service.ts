import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addCake(newcake){
    return this._http.post('/cakes', newcake)
  }

  showAll(){
    return this._http.get('/cakes');
  }

  addRating(ratedCake, num){
    console.log("this is the id that I'm trying to add a rating to"+num);
    return this._http.put('cakes/'+num, ratedCake);
  }

  showOneCake(num){
    return this._http.get('/cakes/'+num.data, num);
  }

}