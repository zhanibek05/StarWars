import { Component, OnInit } from '@angular/core';
import { StarshipdetailsComponent } from '../starshipdetails/starshipdetails.component';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { PostService } from '../../../post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [StarshipdetailsComponent, RouterLink, NgFor , FormsModule],
  providers: [PostService],
  templateUrl: './species.component.html',
  styleUrl: './species.component.css'
})
export class SpeciesComponent implements OnInit{
  species: any;
  searchQuery: string = '';
  

  constructor(private postService: PostService){}


  ngOnInit(): void {
    
    this.postService.getSpecies().subscribe((data) =>{
      this.species = data.results;
      //console.log(this.species);
    })


  }

  search(): void {
    this.postService.searchSpecies(this.searchQuery).subscribe((data) => {
      this.species = data.results;
    } )
  }

}
