import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MouseDB } from '../models/mouse-db';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MouseService {

  constructor(private httpClient:HttpClient) { }


  public getMouseList(name:string): Observable<MouseDB[]>{

    console.log(name);
    let newName = this.convertName(name);
    console.log(newName);

    return this.httpClient.get(`http://localhost:8080/mph-back/${newName}`) as Observable<MouseDB[]>; //Converting spaces to hyphens before sending
  }


  private convertName(name:string) {
    return name.replace(" ", "-");
  }

}
