import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlanetdetailsComponent } from '../planetdetails/planetdetails.component';
import { PostService } from '../../../post.service';
import { Planet } from '../../../interfaces/planets';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [RouterLink, NgFor, PlanetdetailsComponent, FormsModule, NgIf],
  providers: [PostService],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent implements OnInit {
  searchedPlanets: any = [];
  planets: any = [];
  searchQuery: string = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    
    this.postService.getPlanets().subscribe((data) => {
      this.planets = data.results;
    
    })

  }

  search(): void {
    this.postService.searchPlanets(this.searchQuery).subscribe((data) => {
      this.searchedPlanets = data.result;
    })
  }

}
