import { Component, NgModule, OnInit } from '@angular/core';
import { PostService } from '../../../post.service';
import { CharacterdetailsComponent } from '../characterdetails/characterdetails.component';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterdetailsComponent, NgFor, RouterLink, FormsModule, NgIf],
  providers: [PostService],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{
  searchedCharacters: any = [];
  characters: any = [];
  searchQuery: string = '';
  constructor(private postService: PostService){ }

    ngOnInit(): void {

    this.postService.getCharacters().subscribe((data) => {
      //console.log(data);
      this.characters = data.results;
          
    })
  }

  search(): void {
    this.postService.searchCharacters(this.searchQuery).subscribe((data) =>{
      this.searchedCharacters = data.result;
    })
  }
}
