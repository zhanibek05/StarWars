import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../../post.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, RouterLink],
  providers: [PostService],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit{
  searchQuery: string = '';
  isSearch: boolean = false;
  searchFilms: any;
  searchCharacters: any;
  searchStarships: any;
  searchPlanets: any;
  searchSpecies: any;

  constructor(private postService: PostService){}

  ngOnInit(): void {
      
  }


  search():void {

    if(this.searchQuery.length > 0){
      this.isSearch = !this.isSearch;
      this.postService.searchCharacters(this.searchQuery).subscribe((data) => {
        this.searchCharacters = data.results;
      })
      this.postService.searchFilms(this.searchQuery).subscribe((data) => {
        this.searchFilms = data.results;
      })
      this.postService.searchPlanets(this.searchQuery).subscribe((data) => {
        this.searchPlanets = data.results;
      })
      this.postService.searchSpecies(this.searchQuery).subscribe((data) => {
        this.searchSpecies = data.results;
      })
      this.postService.searchStarships(this.searchQuery).subscribe((data) => {
        this.searchStarships = data.results;
      })
    }
    

  }
}
