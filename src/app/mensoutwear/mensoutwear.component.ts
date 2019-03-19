import { Component, OnInit } from '@angular/core';
import { MensoutWear } from '../models/mensoutwear.model';

@Component({
  selector: 'app-mensoutwear',
  templateUrl: './mensoutwear.component.html',
  styleUrls: ['./mensoutwear.component.css']
})
export class MensoutwearComponent implements OnInit {
  mensOutwears: MensoutWear[] = [
    {
      imageId: 1,
      imageName: 'shirt1',
      imagePrice: 50,
      imagePath: '',
    },
    {
      imageId: 2,
      imageName: 'shirt2',
      imagePrice: 150,
      imagePath: '',
    },
    {
      imageId: 3,
      imageName: 'shirt3',
      imagePrice: 70,
      imagePath: '',
    },
    {
      imageId: 4,
      imageName: 'shirt4 ',
      imagePrice: 100,
      imagePath: '',
    },
    {
      imageId: 5,
      imageName: 'shirt5 ',
      imagePrice: 90,
      imagePath: '',
    },
    {
      imageId: 6  ,
      imageName: 'shirt6',
      imagePrice: 80,
      imagePath: '',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
