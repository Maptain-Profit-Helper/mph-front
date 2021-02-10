import { Component, OnInit } from '@angular/core';
import { MouseService } from '../services/mouse.service';

@Component({
  selector: 'app-mice-input',
  templateUrl: './mice-input.component.html',
  styleUrls: ['./mice-input.component.css']
})
export class MiceInputComponent implements OnInit {



  constructor(private MouseService:MouseService) {}

  ngOnInit(): void {
  }

  public sendMice(){

    console.log("Hi")

    this.MouseService.getMouseList("Snow Slinger");

  }

}
