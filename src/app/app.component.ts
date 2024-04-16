import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { HeaderComponent } from './base/components/header/header.component';
import { BannerComponent } from './pages/components/banner/banner.component';
import { FooterComponent } from './base/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomeComponent,
    HttpClientModule,
    FormsModule,
    HeaderComponent,
    BannerComponent,
    FooterComponent
  
  ],
  providers:[
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StarWars';
}
