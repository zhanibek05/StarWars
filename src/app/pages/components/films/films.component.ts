import { Component, NgModule, OnInit } from '@angular/core';
import { FilmdetailsComponent } from '../filmdetails/filmdetails.component';
import { PostService } from '../../../post.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [
    FilmdetailsComponent, 
    RouterLink, 
    NgFor, 
    FormsModule],
  providers: [PostService],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit{
  films: any = [];
  searchQuery: string = '';

  constructor(private postService: PostService){}

  ngOnInit(): void {
    
    this.postService.getFilms().subscribe((data) =>{
      this.films = data.results
    })

  }

  search(): void {
    this.postService.searchFilms(this.searchQuery).subscribe((data) =>{
      this.films = data.results;
    } )
  }

}
