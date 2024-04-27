import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../post.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Film } from '../../../interfaces/films';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filmdetails',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  providers: [PostService],
  templateUrl: './filmdetails.component.html',
  styleUrl: './filmdetails.component.css'
})
export class FilmdetailsComponent implements OnInit{

  film: any;
  characters: any = [];
  planets: any = [];
  species: any = [];
  starships: any = [];
  

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    
    this.postService.getFilmById(id).subscribe((data) => {
      this.film = data.result.properties;

    this.getCharacters();
    this.getStarships();
    this.getPlanets();
    this.getSpecies();
    
      
     
    })  
    
  }
  getCharacters():void{
    this.film.characters.forEach((url: string) => {
      this.http.get(url).subscribe((data: any) =>{
        this.characters.push(data.result);
      })
    });
   }

   getPlanets():void{
    this.film.planets.forEach((url: string) => {
      this.http.get(url).subscribe((data: any) =>{
        this.planets.push(data.result);
      })
    });
   }
   getStarships():void{
    this.film.starships.forEach((url: string) => {
      this.http.get(url).subscribe((data: any) =>{
        this.starships.push(data.result);
      })
    });
   }
   getSpecies():void{
    this.film.species.forEach((url: string) => {
      this.http.get(url).subscribe((data: any) =>{
        this.species.push(data.result);
      })
    });
   }

}
