import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { routes } from '../app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})


export class HousingLocationComponent implements OnInit{
  @Input() housingLocation!: HousingLocation;

  ngOnInit(): void {
    // console.log("HousingLocation",this.housingLocation)
  }

}

