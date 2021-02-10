import { Component, OnInit } from '@angular/core';
import { Mouse } from '../models/mouse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

 
  MOUSE_DATA: Mouse[] = [
    {name: 'Snow Slinger', price: 5},
    {name: 'Technic Knight', price: 5},
    {name: 'Stormsurge, the Vile Tempest', price: 51}
  ];

  displayedColumns: string[] = ['name', 'price'];

  dataSource = this.MOUSE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
