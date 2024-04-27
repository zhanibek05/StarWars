import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../post.service';
import { StarshipdetailsComponent } from '../starshipdetails/starshipdetails.component';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [StarshipdetailsComponent, NgFor, RouterLink, FormsModule, NgIf],
  providers:[PostService],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css'
})
export class StarshipsComponent implements OnInit{
  searchQuery: string = '';
  starships: any = [];
  searchedStarships: any

  constructor(
    private postService: PostService
  ){}


  ngOnInit(): void {
    
    this.postService.getStarships().subscribe((data) =>{
      this.starships = data.results;
    })

  }

  search() : void {
    this.postService.searchStarships(this.searchQuery).subscribe((data) => {
      this.searchedStarships = data.result;
    })
  }

}
