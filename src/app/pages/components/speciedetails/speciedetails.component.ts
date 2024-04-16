import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../post.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Starship } from '../../../interfaces/starchips';
import { Species } from '../../../interfaces/species';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-speciedetails',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  providers: [PostService],
  templateUrl: './speciedetails.component.html',
  styleUrl: './speciedetails.component.css'
})
export class SpeciedetailsComponent implements OnInit{

  specie: Species | undefined;
  homeworld: any;
  people: any[] = [];
  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private http: HttpClient
  ){}


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    
    this.postService.getSpecieById(id).subscribe((data) => {
      this.specie = data;
      
      this.getPeople();
      this.http.get(data.homeworld).subscribe((data: any) =>{
        this.homeworld = data;
      })
     
    })
  }

  getPeople():void{
    if(this.specie){
      this.specie.people.forEach((url:string) => {
        this.http.get(url).subscribe((data: any) =>{
          this.people.push(data);
          //console.log(data);
        })
      })
    }
  }

}
