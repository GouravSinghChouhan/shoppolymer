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
      imageName: 'shirtabcd1',
      imagePrice: 50,
      imagePath: 'assets/mensshirtimages/shirt2.jpg',
    },
    {
      imageId: 2,
      imageName: 'shirt2',
      imagePrice: 150,
      imagePath: 'assets/mensshirtimages/shirt2.jpg',
    },
    {
      imageId: 3,
      imageName: 'shirt3',
      imagePrice: 70,
      imagePath: 'assets/mensshirtimages/shirt3.jpg',
    },
    {
      imageId: 4,
      imageName: 'shirt4 ',
      imagePrice: 100,
      imagePath: 'assets/mensshirtimages/shirt4.jpg',
    },
    {
      imageId: 5,
      imageName: 'shirtabcdkdkdkdkde5 ',
      imagePrice: 90,
      imagePath: 'assets/mensshirtimages/shirt2.jpg',
    },
    {
      imageId: 6  ,
      imageName: 'shirt6',
      imagePrice: 80,
      imagePath: 'assets/mensshirtimages/shirt6.jpg',
    },
  ];
  constructor() { 
  }

  ngOnInit() {
  }

}
