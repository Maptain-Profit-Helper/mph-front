import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MouseDB } from '../models/mouse-db';
import { TempDBService } from '../temp-db.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {

  constructor(private TempDBService:TempDBService) { }

  ngOnInit(): void {
  }

  MOUSE_DATA: MouseDB[] = [
    {name: 'Snow Slinger', price: 5},
    {name: 'Technic Knight', price: 5},
    {name: 'Stormsurge, the Vile Tempest', price: 51}
  ];

  displayedColumns: string[] = ['name', 'price'];

  dataSource = this.MOUSE_DATA;


}
