import { Component, Input, OnInit, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../../post.service';
import { Character } from '../../../interfaces/characters';
import { CharactersComponent } from '../characters/characters.component';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Starship } from '../../../interfaces/starchips';
import { Planet } from '../../../interfaces/planets';
import { Film } from '../../../interfaces/films';


@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  providers: [PostService],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.css'
})
export class CharacterdetailsComponent implements OnInit{
  films: Film[] = [];
  starships: Starship[] = [];
  homeworld: any;
  
  character: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private http: HttpClient
    
  ){};

  //constructor(private postService: PostService){};
  

  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    
    
    this.postService.getCharacterById(id).subscribe((data) => {
  
      this.character = data
      
      this.http.get(data.homeworld).subscribe((data: any) =>{
        this.homeworld = data;
      })
      

      this.getStarships();
      
      this.getFilms();
        
    })

    
  }


  getStarships():void{
    this.character.starships.forEach((url: string) => {
      this.http.get(url).subscribe((data: any) =>{
        this.starships.push(data);
      })
    });
   }

   getFilms():void{
    this.character.films.forEach((url: string) => {
      this.http.get(url).subscribe((data: any) =>{
        this.films.push(data);
      })
    });
   }
   

}
