import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../../post.service';
import { Planet } from '../../../interfaces/planets';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-planetdetails',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  providers: [PostService],
  templateUrl: './planetdetails.component.html',
  styleUrl: './planetdetails.component.css'
})
export class PlanetdetailsComponent implements OnInit{
  
  planet: Planet | undefined ;

  residents: any[] = [];
  films: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    
    this.postService.getPlanetById(id).subscribe((data) => {
      this.planet = data.result.properties;


      // this.getResidents();

      // this.getFilms();


    })

    // this.getFilms();

  }

  // getResidents():void{
  //   if(this.planet){
  //     this.planet.residents.forEach((url) => {
  //       this.http.get(url).subscribe((data: any) =>{
  //         this.residents.push(data);
  //       })
  //     })
  //   }
    
  // }

  // getFilms():void{
  //   if(this.planet){
  //     this.planet.films.forEach((url:string) => {
  //       this.http.get(url).subscribe((data: any) =>{
  //         this.films.push(data);
          
  //       })
  //     })
  //   }
    
  // }
}
