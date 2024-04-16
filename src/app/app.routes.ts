import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/components/characters/characters.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterdetailsComponent } from './pages/components/characterdetails/characterdetails.component';
import { PlanetsComponent } from './pages/components/planets/planets.component';
import { PlanetdetailsComponent } from './pages/components/planetdetails/planetdetails.component';
import { StarshipsComponent } from './pages/components/starships/starships.component';
import { StarshipdetailsComponent } from './pages/components/starshipdetails/starshipdetails.component';
import { FilmsComponent } from './pages/components/films/films.component';
import { FilmdetailsComponent } from './pages/components/filmdetails/filmdetails.component';
import { SpeciesComponent } from './pages/components/species/species.component';
import { SpeciedetailsComponent } from './pages/components/speciedetails/speciedetails.component';
import { AppComponent } from './app.component';


export const routes: Routes = [  
    { path: 'home', component: HomeComponent },
    { path: 'characters', component: CharactersComponent },  
    { path: 'characters/:id', component: CharacterdetailsComponent},
    { path: 'planets', component: PlanetsComponent},
    { path: 'planets/:id', component: PlanetdetailsComponent },
    { path: 'starships', component: StarshipsComponent },
    { path: 'starships/:id', component: StarshipdetailsComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'films/:id', component: FilmdetailsComponent },
    { path: 'species', component: SpeciesComponent },
    { path: 'species/:id', component: SpeciedetailsComponent }

    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutes { }