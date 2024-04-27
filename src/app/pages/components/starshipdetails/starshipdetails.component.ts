import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../post.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Starship } from '../../../interfaces/starchips';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-starshipdetails',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  providers: [PostService],
  templateUrl: './starshipdetails.component.html',
  styleUrl: './starshipdetails.component.css'
})
export class StarshipdetailsComponent implements OnInit{

  starship: Starship | undefined;
  films: any[] = [];
  pilots: any[] = [];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private http: HttpClient
  ){}



  ngOnInit(): void {
      
    

    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    
    this.postService.getStarshipById(id).subscribe((data) => {
      this.starship = data.result.properties;
      //console.log(this.starship?.MGLT);

      // this.getFilms();
      // this.getPilots();
     
    })

  }



  getFilms():void{
    if(this.starship){
      this.starship.films.forEach((url:string) => {
        this.http.get(url).subscribe((data: any) =>{
          this.films.push(data);
          
        })
      })
    }
  }

  getPilots():void{
    if(this.starship){
      this.starship.pilots.forEach((url:string) => {
        this.http.get(url).subscribe((data: any) =>{
          this.pilots.push(data);
          
        })
      })
    }
    
  }
}
