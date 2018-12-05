import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  maDate: number = Date.now();

  produits = [
    { 'type': 'phone',
    'nom': 'Samsung Galaxy 8 32G',
    'prix': 900,
    'qte': 80
    },
    { 'type': 'phone',
    'nom': 'iPhone 6',
    'prix': 700,
    'qte': 150
    },
    { 'type': 'phone',
    'nom': 'Nokia',
    'prix': 1300,
    'qte': 100
    },
    { 'type': 'phone',
    'nom' : 'Infinix',
    'prix': 200,
    'qte': 0
    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
