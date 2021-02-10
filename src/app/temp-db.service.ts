import { Injectable } from '@angular/core';
import { Mouse } from './models/mouse';

@Injectable({
  providedIn: 'root'
})
export class TempDBService {

  constructor() { }

  TEMP_DB: Mouse[] = [
    {name: 'Snow Slinger', price: 5},
    {name: 'Snow Slinger', price: 10},
    {name: 'Snow Slinger', price: 5},
    {name: 'Technic Knight', price: 5},
    {name: 'Stormsurge, the Vile Tempest', price: 10},
    {name: 'Stormsurge, the Vile Tempest', price: 5},
    {name: 'Stormsurge, the Vile Tempest', price: 5},
    {name: 'Stormsurge, the Vile Tempest', price: 10},
    {name: 'Stormsurge, the Vile Tempest', price: 10},
    {name: 'Stormsurge, the Vile Tempest', price: 10},
    {name: 'Black Widow', price: 120},
    {name: 'Black Widow', price: 90},
    {name: 'Black Widow', price: 95},
    {name: 'Black Widow', price: 100},
    {name: 'Naturalist', price: 12},
    {name: 'Naturalist', price: 10},
    {name: 'Naturalist', price: 20},
    {name: 'Naturalist', price: 15},
    {name: 'Naturalist', price: 10},
    {name: 'Naturalist', price: 15},
    {name: 'Naturalist', price: 12},
    {name: 'Cyborg', price: 10},
    {name: 'Cyborg', price: 10},
    {name: 'Cyborg', price: 12},
    {name: 'Dream Drifter', price: 35},
    {name: 'Dream Drifter', price: 40},
    {name: 'Carnivore', price: 35},
    {name: 'Carnivore', price: 45},
  ];


}
