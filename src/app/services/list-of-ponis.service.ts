import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListOfPonisService {

  constructor(private http:HttpClient) { }

  getPonys(){
    return this.http.get('https://ponyapi.net/v1/character/all');
  }
}
