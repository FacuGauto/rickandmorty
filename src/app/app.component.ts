import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { PersonajesService } from './Servicios/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rick and Morty';
  arrayPersonajes: any[];
  numPages: number;
  currentPage: number;

  constructor(private personajesService: PersonajesService) {
    this.currentPage = 1;
  }

  ngOnInit(){
    this.personajesService.getAll()
    .then(response => {
      this.arrayPersonajes = response['results'];
      this.numPages = response['info']['pages'];
    })
  }

  async changePage(siguiente){
    if(siguiente) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    const response = await this.personajesService.getAll(this.currentPage);
    this.arrayPersonajes = response['results'];
  }
}
